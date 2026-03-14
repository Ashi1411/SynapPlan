const express = require("express");
const router = express.Router();

const {handleUserSignup, handleUserLogin, handleGetCurrentUser} = require("../controllers/user");

//! Create a new user
router.post("/signup", handleUserSignup);

//! login a user
router.post("/login", handleUserLogin);

//! checking if the user is logged in or not
router.get("/me", handleGetCurrentUser)

module.exports = router;