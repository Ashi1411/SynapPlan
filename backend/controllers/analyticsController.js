const {
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
} = require("../services/analyticsService");


async function getAnalytics(req, res) {
    const userId = req.user._id;

    const weeklySessions = await getWeeklySession(userId);
    
    const { planned, durationCompleted } = getTotalStudyHours(weeklySessions);

    const completionRate = averageCompletionRate(planned, durationCompleted);

    const weeklyConsistency = weeklyConsistencyScore(weeklySessions);

    const focusEfficiency = getFocusEfficiency(weeklySessions);

    const weeklyProductivityStudyTime = await getWeeklyStudyTime(userId);

    const weeklyFocusEfficiency = await getWeeklyFocusEfficiency(userId);

    const monthlyProductiveStudyTime = await getMonthlyStudyTime(userId);

    const monthlyFocusEfficiency = await getMonthlyFocusEfficiency(userId);

    const insights = await getInsights(userId);

    res.json({
        weeklySessions,
        durationCompleted,
        completionRate,
        weeklyConsistency,
        focusEfficiency,
        weeklyProductivityStudyTime,
        weeklyFocusEfficiency,
        monthlyProductiveStudyTime,
        monthlyFocusEfficiency,
        insights
    });
};

module.exports = {getAnalytics};