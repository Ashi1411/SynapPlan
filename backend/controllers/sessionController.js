const {
  getPendingSession,
  defaultSession,
  startSession,
  pauseSession,
  startBreak,
  endBreak,
  completeSession,
  getSession,
} = require("../services/sessionService");

//! to get default session
async function getTodaySessionsController(req, res) {
  try {
    const userId = req.user._id;

    const sessions = await getPendingSession(userId);
    const defaultSess = defaultSession(sessions);

    console.log("FINAL RESPONSE:", { sessions, defaultSess });

    res.json({
      sessions,
      defaultSession: defaultSess,
    });
  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(400).json({ message: err.message });
  }
}

//! start session
async function startSessionController(req, res) {
  try {
    const userId = req.user._id;
    const sessionId = req.params.id;

    const session = await startSession(sessionId, userId);

    res.json(session);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//! pause session
async function pauseSessionController(req, res) {
  try {
    const userId = req.user._id;
    const sessionId = req.params.id;

    const session = await pauseSession(sessionId, userId);

    res.json(session);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//! start break
async function startBreakController(req, res) {
  try {
    const userId = req.user._id;
    const sessionId = req.params.id;

    const session = await startBreak(sessionId, userId);

    res.json(session);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//! end break
async function endBreakController(req, res) {
  try {
    const userId = req.user._id;
    const sessionId = req.params.id;

    const session = await endBreak(sessionId, userId);

    res.json(session);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//! complete session
async function completeSessionController(req, res) {
  try {
    const userId = req.user._id;
    const sessionId = req.params.id;

    const session = await completeSession(sessionId, userId);

    res.json(session);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//! get current session
async function getSessionController(req, res) {
  try {
    const userId = req.user._id;
    const sessionId = req.params.id;

    const session = await getSession(sessionId, userId);

    res.json(session);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  getTodaySessionsController,
  startSessionController,
  pauseSessionController,
  startBreakController,
  endBreakController,
  completeSessionController,
  getSessionController,
};
