const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const {
  getTodaySessionsController,
  startSessionController,
  pauseSessionController,
  startBreakController,
  endBreakController,
  completeSessionController,
  getSessionController,
} = require("../controllers/sessionController");

//todo middlewares
router.use(auth);

//todo routes
//! get todays session
router.get("/today", getTodaySessionsController);

//! start session
router.get("/start/:id", startSessionController);

//! pause session
router.get("/pause/:id", pauseSessionController);

//! start break
router.get("/start-break/:id", startBreakController);

//! end break
router.get("/end-break/:id", endBreakController);

//! complete session
router.get("/complete/:id", completeSessionController);

//! get session
router.get("/:id", getSessionController);


module.exports = router;