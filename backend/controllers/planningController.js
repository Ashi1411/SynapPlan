const {
  getWeekDate,
  getWeekDays,
  getTodayDay,
  calculateDayType,
  calculateDailyLoad,
  getTodaySessions,
  getWeeklySessions,
} = require("../services/planningServices");

async function getPlanner(req, res) {
  const userId = req.user._id;

  const todaySessions = await getTodaySessions(userId);

  const { startOfWeek, endOfWeek } = getWeekDate();

  const days = getWeekDays(startOfWeek);

  const todayDay = getTodayDay(days);

  const dayType = calculateDayType(todaySessions);

  const dailyLoad = await calculateDailyLoad(userId, todaySessions);

  const weeklySessions = await getWeeklySessions(
    userId,
    startOfWeek,
    endOfWeek,
  );

  res.json({
    todaySessions,
    startOfWeek,
    endOfWeek,
    days,
    todayDay,
    dayType,
    dailyLoad,
    weeklySessions,
  });
}

module.exports = { getPlanner };
