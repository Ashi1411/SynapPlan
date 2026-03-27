const express = require("express");
const router = express.Router();

// const {checkForAuthentication} = require("../middlewares/auth");

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
// router.use(checkForAuthentication);

//todo routes
//! get todays session
router.get("/", getTodaySessionsController);

//! start session
router.put("/start/:id", startSessionController);

//! pause session
router.put("/pause/:id", pauseSessionController);

//! start break
router.put("/start-break/:id", startBreakController);

//! end break
router.put("/end-break/:id", endBreakController);

//! complete session
router.put("/complete/:id", completeSessionController);

//! get session
router.get("/:id", getSessionController);


module.exports = router;