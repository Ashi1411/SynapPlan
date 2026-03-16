const Session = require("../models/session");
const Subject = require("../models/subject");


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
      label: d.toLocaleDateString("en-IN", { weekday: "short" }),
    });
  }

  return days;
}

//! type of day today -> focus, normal/balanced, light
function calculateDayType(todaySessions) {
  const totalDuration = todaySessions.reduce((sum, s) => {
    sum + s.duration;
  }, 0);

  if (totalDuration > 240) return "Focus Day";
  if (totalDuration > 120) return "Balanced Day";
  return "Light Day";
}

//! find daily load
function calculateDailyLoad(todaySession) {
  const planned = todaySession.reduce((sum, s) => sum + s.duration, 0);

  const dailyCapacity = 360;

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
    .select("topics duration durationCompleted status subjectId intensity");
}

//! get weekly planner
async function getWeeklySessions(userId, startOfWeek, endOfWeek) {
  const sessions = await Session.find({
    userId,
    date: { $gte: startOfWeek, $lte: endOfWeek },
  })
    .populate("subjectId", "subjectName intensity")
    .select("topics duration durationCompleted status subjectId intensity");

  const week = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  };

  sessions.forEach((s) => {
    const day = new Date(s.date).toLocaleDateString("en-IN", {
      weekday: "short",
    });
    week[day].push(s);
  });

  return week;
}

module.exports = {
  getWeekDate,
  getWeekDays,
  calculateDayType,
  calculateDailyLoad,
  getTodaySessions,
  getWeeklySessions,
};
