const Session = require("../models/session");
const Subject = require("../models/subject");
const mongoose = require("mongoose");

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

//! type of day today -> focus, normal/balanced, light
function calculateDayType(todaySessions) {
  const totalDuration = todaySessions.reduce((sum, s) => {
    return sum + s.duration;
  }, 0);

  if (totalDuration > 4 * HOUR) return "Focus Day";
  if (totalDuration > 2 * HOUR) return "Balanced Day";
  return "Light Day";
}

//! Cognitive Capacity Remaining -> on an avg max capacity to study of a person is 6 hours
function calculateCognitiveCapacity(todaySessions) {
  if (todaySessions.length === 0) return 100;

  const completed = todaySessions.reduce(
    (sum, s) => sum + s.durationCompleted,
    0,
  );

  const dailyCapacity = 6 * HOUR;
  const remaining = Math.max(dailyCapacity - completed, 0);

  return Math.round((remaining / dailyCapacity) * 100);
}

//! find today's sessions
async function getTodaySessions(userId) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  return Session.find({
    userId,
    date: { $gte: today, $lt: tomorrow },
  })
    .populate("subjectId", "subjectName intensity")
    .select("topics duration durationCompleted status subjectId intensity");
}

//! find weekly consistency
async function calculateWeeklyCompletionRate(userId) {
  const today = new Date();
  const startOfWeek = new Date(today);

  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const sessions = await Session.find({
    userId,
    date: { $gte: startOfWeek, $lte: today },
  }).select("duration durationCompleted");

  let totalPlanned = 0;
  let totalCompleted = 0;

  sessions.forEach((s) => {
    totalPlanned += s.duration;
    totalCompleted += s.durationCompleted;
  });

  if (totalPlanned == 0) return 0;

  const consistency = (totalCompleted / totalPlanned) * 100;

  return Math.round(consistency);
}

//! find weekly productivity day by day for weekly productivity graph
async function getWeeklyProductivity(userId) {
  const today = new Date();
  const startOfWeek = new Date(today);
  const day = today.getDay() || 7; // fix Sunday

  startOfWeek.setDate(today.getDate() - day + 1);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  const sessions = await Session.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        status: "completed",
        date: {
          $gte: startOfWeek,
          $lt: endOfWeek, // ✅ limit to current week
        },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$date" },
        },
        totalStudy: { $sum: "$durationCompleted" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  return sessions;
}

//! get upcoming deadlines
async function getUpcomingDeadlines(userId) {
  const today = new Date();

  const deadlines = await Subject.find({
    userId,
    examDate: { $gt: today },
  })
    .sort({ examDate: 1 })
    .limit(3)
    .select("subjectName examDate priority");

  return deadlines;
}

//! generation smart recommendations
function generateRecommendations({
  todaySessions,
  upcomingDeadlines,
  weeklyProductivity,
}) {
  const recommendations = [];

  const totalToday = todaySessions.reduce(
    (sum, s) => sum + s.durationCompleted,
    0,
  );

  //? recommendation related to type of day tomorrow on the basis of work done today
  if (totalToday > 6 * HOUR) {
    recommendations.push("You studied a lot today. Make sure to rest.");
  } else if (totalToday > 2 * HOUR) {
    recommendations.push("Tomorrow could be a balanced day.");
  } else {
    recommendations.push("Consider focused study tomorrow.");
  }

  //? recommendation of the upcoming deadline
  if (upcomingDeadlines.length > 0) {
    recommendations.push(
      `${upcomingDeadlines[0].subjectName} requires more attention before exam`,
    );
  }

  //? which time is best for the user to study
  const buckets = {
    morning: 0,
    afternoon: 0,
    evening: 0,
    night: 0,
  };

  todaySessions.forEach((s) => {
    if (!s.startTime) return;

    const hour = new Date(s.startTime).getHours();

    if (hour >= 5 && hour < 12) {
      buckets.morning += s.durationCompleted || 0;
    } else if (hour >= 12 && hour < 17) {
      buckets.afternoon += s.durationCompleted || 0;
    } else if (hour >= 17 && hour < 21) {
      buckets.evening += s.durationCompleted || 0;
    } else {
      buckets.night += s.durationCompleted || 0;
    }
  });

  const bestPeriod = Object.entries(buckets).sort((a, b) => b[1] - a[1])[0][0];

  const messages = {
    morning:
      "You are most productive in the morning. Schedule difficult topics early.",
    afternoon:
      "Your afternoon sessions are strong. Use this time for deep work.",
    evening: "Evening seems productive for you. Plan important sessions then.",
    night:
      "You performed better during night sessions. Schedule difficult topics at this time.",
  };

  if (buckets[bestPeriod] > 0) {
    recommendations.push(messages[bestPeriod]);
  }

  //? recommendation related to weekly productivity
  const totalWeekly = weeklyProductivity.reduce(
    (sum, d) => sum + d.totalStudy,
    0,
  );

  if (totalWeekly < 3 * HOUR) {
    recommendations.push("Your weekly consistency is low...");
  }

  return recommendations;
}

//! ***************** read ****************
async function calculateStreak(userId) {
  const sessions = await Session.find({
    userId,
    durationCompleted: { $gt: 0 },
  })
    .select("date")
    .sort({ date: -1 });

  const studyDays = new Set();

  sessions.forEach((s) => {
    const day = new Date(s.date).toDateString();
    studyDays.add(day);
  });

  const sortedDays = [...studyDays]
    .map((d) => new Date(d))
    .sort((a, b) => b - a);

  let streak = 0;
  let currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);

  for (const day of sortedDays) {
    const diff = Math.floor((currentDate - day) / (1000 * 60 * 60 * 24));

    if (diff === 0) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else if (diff === 1) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

module.exports = {
  calculateDayType,
  calculateCognitiveCapacity,
  getTodaySessions,
  calculateWeeklyCompletionRate,
  getWeeklyProductivity,
  getUpcomingDeadlines,
  generateRecommendations,
};
