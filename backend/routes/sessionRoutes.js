const express = require("express");
const router = express.Router();

const {checkForAuthentication} = require("../middlewares/auth");

//todo middlewares
router.use(checkForAuthentication);

const {
  getTodaySessionsController,
  startSessionController,
  pauseSessionController,
  startBreakController,
  endBreakController,
  completeSessionController,
  getSessionController,
  getTodayCompletedSession,
  calculateSessionEfficiency
} = require("../controllers/sessionController");


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

//! get todays session
router.get("/completed", getTodayCompletedSession);

//! get current session efficiency
router.get("/efficiency/:id", calculateSessionEfficiency);

//! get session by id
//? they are placed at last because Dynamic routes (/:id) are greedy. They capture EVERYTHING unless placed last.
router.get("/:id", getSessionController);


module.exports = router;