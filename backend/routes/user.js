const express = require("express");
const router = express.Router();

const {handleUserSignup, handleUserLogin} = require("../controllers/user");

//! Create a new user
router.post("/signup", handleUserSignup);

//! login a user
router.post("/login", handleUserLogin);

module.exports = router;