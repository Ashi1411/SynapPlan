const Session = require("../models/session");
const Subject = require("../models/subject");
const User = require("../models/user");

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

//! get the range of this week
function getWeekDate() {
  const today = new Date();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(
    today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1),
  );
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return { startOfWeek, endOfWeek };
}

//! get all the days of a week
function getWeekDays(startOfWeek) {
  const days = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);

    days.push({
      date: d,
      label: d.toLocaleDateString("en-US", { weekday: "short" }),
    });
  }

  return days;
}

//! get today's day
function getTodayDay(days) {
  const today = new Date();
  const day = today.getDay(); //? 0 (Sun) → 6 (Sat)
  const idx = day === 0 ? 6 : day - 1;

  return days[idx].label;
}

//! type of day today -> focus, normal/balanced, light
function calculateDayType(todaySessions) {
  const totalDuration = todaySessions.reduce((sum, s) => sum + s.duration, 0);

  if (totalDuration > 4 * HOUR) return "Focus Day";
  if (totalDuration > 2 * HOUR) return "Balanced Day";
  return "Light Day";
}

//! find daily load
async function calculateDailyLoad(userId, todaySession) {
  if (!todaySession.length) return 0;

  const planned = todaySession.reduce((sum, s) => sum + s.duration, 0);
  const user = await User.findOne({ _id: userId });
  const dailyCapacity = user.maxStudyHoursPerDay * HOUR; // 8 hours

  return Math.round((planned / dailyCapacity) * 100);
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
    .select(
      "topics duration durationCompleted status subjectId intensity date",
    );
}

//! get weekly planner
async function getWeeklySessions(userId, startOfWeek, endOfWeek) {
  const sessions = await Session.find({
    userId,
    date: { $gte: startOfWeek, $lte: endOfWeek },
  })
    .populate("subjectId", "subjectName intensity")
    .select(
      "topics duration durationCompleted status subjectId intensity date",
    );

  const weeklySessions = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  };

  sessions.forEach((s) => {
    const day = new Date(s.date).toLocaleDateString("en-US", {
      weekday: "short",
    });
    if (weeklySessions[day]) {
      weeklySessions[day].push(s);
    }
  });

  return weeklySessions;
}

module.exports = {
  getWeekDate,
  getWeekDays,
  getTodayDay,
  calculateDayType,
  calculateDailyLoad,
  getTodaySessions,
  getWeeklySessions,
};
