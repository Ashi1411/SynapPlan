const Subject = require("../models/subject");
const Session = require("../models/session");


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

  const weeklySessions = await Session.find({
    userId,
    date: { $gte: startOfWeek, $lte: endOfWeek },
  });

  return weeklySessions;
}


//! get total study hours
function getTotalStudyHours(weeklySessions) {
  const planned = 0;
  const durationCompleted = 0;

  weeklySessions.forEach((s) => {
    planned += s.duration;
    durationCompleted += s.durationCompleted;
  });

  return {planned, durationCompleted};
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
    })

    return days.size;
}


//! get focus efficiency
function getFocusEfficiency(weeklySessions) {
  const planned = 0;
  const durationCompleted = 0;
  const breakDuration = 0;

  weeklySessions.forEach((s) => {
    planned += s.duration;
    durationCompleted += s.durationCompleted;
    breakDuration += s.breakDuration;
  });

  if (planned === 0) return 0;

  const focusDuration = durationCompleted - breakDuration;

  return Math.round((focusDuration / planned) * 100);
}


//! find weekly productivity day by day for weekly productivity graph
async function getWeeklyProductivity(userId) {
  const today = new Date();
  const startOfWeek = new Date(today);

  startOfWeek.setDate(today.getDate() - today.getDay());

  const sessions = await Session.aggregate([
    {
      $match: {
        userId,
        date: { $gte: startOfWeek },
      },
    },
    {
      $group: {
        _id: "$date",
        totalStudy: { $sum: "$durationCompleted" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  return sessions;
}


//! get monthly productivity day by day for weekly productivity graph






