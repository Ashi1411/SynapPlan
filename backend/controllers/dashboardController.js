const {
  calculateDayType,
  calculateCognitiveCapacity,
  getTodaySessions,
  calculateWeeklyConsistency,
  getWeeklyProductivity,
  getUpcomingDeadlines,
  generateRecommendations,
} = require("../services/dashboardServices");

async function getDashboard(req, res) {
  const userId = req.user._id;
  

  const todaySessions = await getTodaySessions(userId);

  const dayType = calculateDayType(todaySessions);

  const cognitive = calculateCognitiveCapacity(todaySessions);

  const weeklyConsistency = await calculateWeeklyConsistency(userId);

  const weeklyProductivity = await getWeeklyProductivity(userId);

  const upcomingDeadlines = await getUpcomingDeadlines(userId);

  const recommendations = generateRecommendations({
    todaySessions,
    upcomingDeadlines,
    weeklyProductivity,
  });

  res.json({
    dayType,
    cognitive,
    todaySessions,
    weeklyConsistency,
    weeklyProductivity,
    upcomingDeadlines,
    recommendations,
  });
}

module.exports = {getDashboard}
