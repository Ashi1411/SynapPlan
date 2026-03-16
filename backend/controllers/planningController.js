const {
  getWeekDate,
  getWeekDays,
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

  const dayType = calculateDayType(todaySessions);

  const dailyLoad = calculateDailyLoad(todaySessions);

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
    dayType,
    dailyLoad,
    weeklySessions,
  });
}

module.exports = { getPlanner };
