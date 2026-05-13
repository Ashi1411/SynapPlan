const Session = require("../models/session");
const Subject = require("../models/subject");

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

//! populate function -> to add the subject data also along with session data
async function populateSession(session) {
  return await session.populate("subjectId", "subjectName intensity");
}

//! get the user pending sessions
async function getPendingSession(userId) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const sessions = await Session.find({
    userId,
    date: { $gte: today, $lt: tomorrow },
    status: { $ne: "completed" },
  })
    .populate("subjectId", "subjectName intensity")
    .sort({ date: 1 });

  console.log("SESSIONS FOUND:", sessions);

  return sessions;
}

//! default session
function defaultSession(remSessions) {
  if (!remSessions.length) return null;

  const active = remSessions.find((s) => s.status === "active");
  const onBreak = remSessions.find((s) => s.status === "break");

  const result =
    active || onBreak || remSessions.find((s) => s.status === "pending");

  console.log("DEFAULT SESSION:", result);

  return result;
}

//todo start session
async function startSession(sessionId, userId) {
  const session = await Session.findOne({ _id: sessionId, userId });

  if (!session || session.status === "completed") {
    throw new Error("Invalid Session");
  }

  const activeSessions = await Session.find({
    userId,
    status: "active",
  });

  for (const s of activeSessions) {
    if (s.startTime) {
      const elapsed = Math.floor((Date.now() - s.startTime) / 1000);
      s.durationCompleted += elapsed;
    }

    s.startTime = null;
    s.status = "pending";

    await s.save();
  }

  session.startTime = new Date();
  session.status = "active";

  await session.save();

  return await populateSession(session);
}

//todo pause session
async function pauseSession(sessionId, userId) {
  const session = await Session.findOne({ _id: sessionId, userId });

  if (!session || session.status !== "active") {
    throw new Error("Not an active session");
  }

  if (!session.startTime) {
    throw new Error("Session has no start time");
  }

  const elapsed = Math.floor((Date.now() - session.startTime) / 1000);

  session.durationCompleted += elapsed;
  session.startTime = null;
  session.status = "pending";

  await session.save();
  return await populateSession(session);
}

//todo start break
async function startBreak(sessionId, userId) {
  const session = await Session.findOne({ _id: sessionId, userId });

  if (!session || session.status !== "active") {
    throw new Error("Session is not active");
  }

  const elapsed = Math.floor((Date.now() - session.startTime) / 1000);

  session.durationCompleted += elapsed;

  session.startTime = null;
  session.status = "break";
  session.breakStartTime = new Date();

  await session.save();
  return await populateSession(session);
}

//todo end break
async function endBreak(sessionId, userId) {
  const session = await Session.findOne({ _id: sessionId, userId });

  if (!session || session.status !== "break") {
    throw new Error("Session is not on break");
  }

  const breakTime = Math.floor((Date.now() - session.breakStartTime) / 1000);

  session.breakDuration += breakTime;
  session.breakCount += 1;

  session.breakStartTime = null;
  session.status = "pending";
  session.startTime = null;

  await session.save();
  return await populateSession(session);
}

//todo complete session
async function completeSession(sessionId, userId) {
  const session = await Session.findOne({ _id: sessionId, userId });

  if (!session) {
    throw new Error("Session doesn't exist");
  }

  if (session.status === "active" && session.startTime) {
    const elapsed = Math.floor((Date.now() - session.startTime) / 1000);
    session.durationCompleted += elapsed;
  }

  session.startTime = null;
  session.breakStartTime = null;
  session.status = "completed";

  await session.save();
  return await populateSession(session);
}

//todo get current session
async function getSession(sessionId, userId) {
  const session = await Session.findOne({ _id: sessionId, userId }).populate(
    "subjectId",
    "subjectName intensity",
  );

  if (!session) {
    throw new Error("Session not found");
  }

  if (session.status === "completed") {
    throw new Error("Session already completed");
  }

  let currentDuration = session.durationCompleted;
  let currentBreak = session.breakDuration;

  if (session.status === "active" && session.startTime) {
    const elapsed = Math.floor((Date.now() - session.startTime) / 1000);
    currentDuration += elapsed;
  }

  if (session.status === "break" && session.breakStartTime) {
    const elapsed = Math.floor((Date.now() - session.breakStartTime) / 1000);
    currentBreak += elapsed;
  }

  return {
    ...session.toObject(),
    currentDuration,
    currentBreak,
  };
}

//! session summary section
//todo get today's completed sessions to display their details
async function getCompletedSessions(userId) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const sessions = await Session.find({
    userId,
    date: { $gte: today, $lt: tomorrow },
    status: "completed",
  })
    .populate("subjectId", "subjectName intensity")
    .sort({ date: 1 });

  console.log("Sessions Found:", sessions);

  return sessions;
}

// todo get session by session_id
async function getCurrentSession(userId, sessionId) {
  const session = await Session.findOne({
    _id: sessionId,
    userId,
  }).populate("subjectId", "subjectName intensity");

  console.log("Sessions Found:", session);

  return session;
}

//todo get session efficiency
function getSessionEfficiency(session) {
  const duration = session.durationCompleted;
  const breakDuration = session.breakDuration;
  const breakCount = session.breakCount;

  if (duration === 0) return 0;

  let efficiency = duration / (duration + breakDuration);

  //? penalty for break count
  efficiency *= 1 - breakCount * 0.05;

  //? clamp the efficiency between 0 and 1
  efficiency = Math.max(0, Math.min(1, efficiency));

  return (efficiency * 100).toFixed(1);
}

//todo get session efficiency label
function getEfficiencyLabel(efficiency) {
  const value = efficiency / 100;

  if (value >= 0.85) return "Excellent";
  if (value >= 0.7) return "Good";
  if (value >= 0.5) return "Average";
  return "Poor";
}

module.exports = {
  getPendingSession,
  defaultSession,
  startSession,
  pauseSession,
  startBreak,
  endBreak,
  completeSession,
  getSession,
  getCompletedSessions,
  getCurrentSession,
  getSessionEfficiency,
  getEfficiencyLabel,
};
