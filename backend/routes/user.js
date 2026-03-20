const express = require("express");
const router = express.Router();

const {handleUserSignup, handleUserLogin, handleGetCurrentUser} = require("../controllers/user");
const {getDashboard} = require("../controllers/dashboardController");
const { checkForAuthentication } = require("../middlewares/auth");
const { getPlanner } = require("../controllers/planningController");
const { getAnalytics } = require("../controllers/analyticsController");
const { addSubject } = require("../controllers/addSubjectController");

//! Create a new user
router.post("/signup", handleUserSignup);

//! login a user
router.post("/login", handleUserLogin);

//! checking if the user is logged in or not
router.get("/me", handleGetCurrentUser)

//! dashboard page
router.get("/dashboard", checkForAuthentication, getDashboard);

//! planner page
router.get("/planner", checkForAuthentication, getPlanner);

//! add subject page
router.post("/add-subject", checkForAuthentication, addSubject);

//! analytics page
router.get("/analytics", checkForAuthentication, getAnalytics);

module.exports = router;