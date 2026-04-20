const Subject = require("../models/subject");
const Session = require("../models/session");

const mongoose = require("mongoose");

//! get current week sessions
async function getWeeklySession(userId) {
  const today = new Date();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(
    today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1),
  );
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const weeklySessions = await Session.find({
    userId,
    date: { $gte: startOfWeek, $lte: endOfWeek },
  });

  return weeklySessions;
}

//! get total study hours of current week
function getTotalStudyHours(weeklySessions) {
  let planned = 0;
  let durationCompleted = 0;

  weeklySessions.forEach((s) => {
    planned += s.duration;
    durationCompleted += s.durationCompleted;
  });

  return { planned, durationCompleted };
}

//! get average completion rate
function averageCompletionRate(planned, durationCompleted) {
  if (planned == 0) return 0;

  return Math.round((durationCompleted / planned) * 100);
}

//! calculate weekly consistency score
function weeklyConsistencyScore(weeklySessions) {
  const days = new Set();

  weeklySessions.forEach((s) => {
    if (s.durationCompleted > 0) {
      const day = new Date(s.date).toDateString();
      days.add(day);
    }
  });

  return days.size;
}

//! get focus efficiency
function getFocusEfficiency(weeklySessions) {
  let planned = 0;
  let durationCompleted = 0;
  let breakDuration = 0;

  weeklySessions.forEach((s) => {
    planned += s.duration;
    durationCompleted += s.durationCompleted;
    breakDuration += s.breakDuration;
  });

  if (planned === 0) return 0;

  const focusDuration = durationCompleted - breakDuration;

  return Math.round((focusDuration / planned) * 100);
}

//! find weekly productivity (study time) day by day for weekly productivity graph
async function getWeeklyStudyTime(userId) {
  const today = new Date();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + (today.getDay() == 0 ? -6 : 1));
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const sessions = await Session.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        date: { $gte: startOfWeek, $lte: endOfWeek },
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

//! find weekly productivity (focus efficiency) day by day for weekly productivity graph
async function getWeeklyFocusEfficiency(userId) {
  const today = new Date();
  
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + (today.getDay() == 0 ? -6 : 1));
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const sessions = await Session.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        date: { $gte: startOfWeek, $lte: endOfWeek },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$date" },
        },
        totalStudy: { $sum: "$durationCompleted" },
        totalBreak: { $sum: "$breakDuration" },
      },
    },
    {
      $addFields: {
        focusEfficiency: {
          $cond: [
            { $eq: [{ $add: ["$totalStudy", "$totalBreak"] }, 0] },
            0,
            {
              $divide: [
                "$totalStudy",
                { $add: ["$totalStudy", "$totalBreak"] },
              ],
            },
          ],
        },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  return sessions;
}

//! get monthly productivity (study) day by day for weekly productivity graph
async function getMonthlyStudyTime(userId) {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  startOfMonth.setHours(0, 0, 0, 0);

  const sessions = await Session.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        date: { $gte: startOfMonth },
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

//! find weekly productivity (focus efficiency) day by day for weekly productivity graph
async function getMonthlyFocusEfficiency(userId) {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  startOfMonth.setHours(0, 0, 0, 0);


  const sessions = await Session.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        date: { $gte: startOfMonth },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$date" },
        },
        totalStudy: { $sum: "$durationCompleted" },
        totalBreak: { $sum: "$breakDuration" },
      },
    },
    {
      $addFields: {
        focusEfficiency: {
          $cond: [
            { $eq: [{ $add: ["$totalStudy", "$totalBreak"] }, 0] },
            0,
            {
              $divide: [
                "$totalStudy",
                { $add: ["$totalStudy", "$totalBreak"] },
              ],
            },
          ],
        },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  return sessions;
}

//! get insights of the data
async function getInsights(userId) {
  const sessions = await Session.find({ userId });

  if (!sessions.length) {
    return { insights: ["No data available yet."], stats: {} };
  }

  const insights = [];

  //? individual efficiency calculator function
  const getEfficiency = (s) => {
    const total = s.durationCompleted + (s.breakDuration || 0);
    return total === 0 ? 0 : s.durationCompleted / total;
  };

  const avg = (arr) =>
    arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

  const getTimeSlot = (hour) => {
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };

  const timeBuckets = {
    morning: [],
    afternoon: [],
    evening: [],
    night: [],
  };

  const shortSessions = [];
  const longSessions = [];

  const subjectMap = {};

  const dailyStudy = {};

  sessions.forEach((s) => {
    const eff = getEfficiency(s);
    const hour = new Date(s.startTime || s.date).getHours();
    const slot = getTimeSlot(hour);
    timeBuckets[slot].push(eff);

    //? to analyze that short sessions are more efficient or short sessions are more efficient
    if (s.durationCompleted < 90) shortSessions.push(eff);
    else longSessions.push(eff);

    //? to analyze efficiency of each session of each subject
    if (s.subject) {
      if (!subjectMap[s.subject]) subjectMap[s.subject] = [];
      subjectMap[s.subject].push(eff);
    }

    const day = new Date(s.date).toISOString().split("T")[0];

    if (!dailyStudy[day]) dailyStudy[day] = 0;
    dailyStudy[day] += s.durationCompleted;
  });

  //todo time based events -> in which time productivity is good
  const avgMorning = avg(timeBuckets.morning);
  const avgAfternoon = avg(timeBuckets.afternoon);
  const avgEvening = avg(timeBuckets.evening);
  const avgNight = avg(timeBuckets.night);

  const timeAvg = {
    morning: avgMorning,
    afternoon: avgAfternoon,
    evening: avgEvening,
    night: avgNight,
  };

  const entries = Object.entries(timeAvg);

  // filter out zero values (no data)
  const valid = entries.filter(([_, val]) => val > 0);

  if (valid.length >= 2) {
    // sort by efficiency
    valid.sort((a, b) => b[1] - a[1]);

    const [bestTime, bestVal] = valid[0];
    const [worstTime, worstVal] = valid[valid.length - 1];

    const diff = ((bestVal - worstVal) / worstVal) * 100;

    insights.push(
      `📈 You perform ${diff.toFixed(0)}% better in ${bestTime} sessions compared to ${worstTime}.`,
    );
  }

  if (valid.length >= 2) {
    const [bestTime, bestVal] = valid[0];

    insights.push(
      `🔥 Your peak productivity occurs during ${bestTime} sessions.`,
    );
  }

  if (valid.length >= 2) {
    const [worstTime] = valid[valid.length - 1];

    insights.push(
      `⚠️ Your efficiency is lowest during ${worstTime} sessions. Consider adjusting your schedule.`,
    );
  }

  const values = valid.map((v) => v[1]);
  const max = Math.max(...values);
  const min = Math.min(...values);

  if (max - min < 0.1) {
    insights.push(
      "⚖️ Your productivity is fairly consistent throughout the day.",
    );
  }

  if (
    avgNight > avgMorning &&
    avgNight > avgAfternoon &&
    avgNight > avgEvening
  ) {
    insights.push(
      "🌙 You are most productive at night. Late hours suit your focus style.",
    );
  }

  if (avgMorning > avgEvening && avgMorning > avgNight) {
    insights.push(
      "🌅 Morning sessions give you the best focus. Consider scheduling important tasks early.",
    );
  }

  //todo session duration insights
  if (avg(longSessions) < avg(shortSessions)) {
    insights.push("⚠️ Productivity decreases after long sessions (>90 mins).");
  }

  //todo subject insights
  Object.keys(subjectMap).forEach((subject) => {
    if (avg(subjectMap[subject]) < 0.5) {
      insights.push(`📚 ${subject} requires additional focus.`);
    }
  });

  //todo consistency insights
  const totalDays = Object.keys(dailyStudy).length;
  const activeDays = Object.values(dailyStudy).filter((d) => d > 0).length;

  const consistency = totalDays === 0 ? 0 : activeDays / totalDays;

  if (consistency < 0.5) {
    insights.push("📉 Your consistency is low.");
  } else {
    insights.push("🔥 Great consistency!");
  }

  //todo overload insights
  const sortedDays = Object.entries(dailyStudy).sort();

  let streak = 0;

  for (let i = 0; i < sortedDays.length; i++) {
    if (sortedDays[i][1] > 300) {
      streak++;
      if (streak >= 2) {
        insights.push("⚠️ Productivity drops after consecutive heavy days.");
        break;
      }
    } else {
      streak = 0;
    }
  }

  return {
    insights,
    stats: {
      avgMorningEfficiency: avgMorning,
      avgAfternoonEfficiency: avgAfternoon,
      avgEveningEfficiency: avgEvening,
      avgNightEfficiency: avgNight,
      consistency,
      avgShortSessionEfficiency: avg(shortSessions),
      avgLongSessionEfficiency: avg(longSessions),
    },
  };
}

module.exports = {
  getWeeklySession,
  getTotalStudyHours,
  averageCompletionRate,
  weeklyConsistencyScore,
  getFocusEfficiency,
  getWeeklyStudyTime,
  getWeeklyFocusEfficiency,
  getMonthlyStudyTime,
  getMonthlyFocusEfficiency,
  getInsights,
};
