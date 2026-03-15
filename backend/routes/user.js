const express = require("express");
const router = express.Router();

const {handleUserSignup, handleUserLogin, handleGetCurrentUser} = require("../controllers/user");
const {getDashboard} = require("../controllers/dashboardController");
const { checkForAuthentication } = require("../middlewares/auth");

//! Create a new user
router.post("/signup", handleUserSignup);

//! login a user
router.post("/login", handleUserLogin);

//! checking if the user is logged in or not
router.get("/me", handleGetCurrentUser)

//! dashboard page
router.get("/dashboard", checkForAuthentication, getDashboard);




module.exports = router;