const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_SECRET;

//! for password hashing
const bcrypt = require("bcrypt");
const User = require("../models/user");

//! payload generation
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret,
  );
}

//! validating user
function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret); //* will return valid user if exists
  } catch (error) {
    return null;
  }
}

//! for hashing password
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

//! for validating user password for login
async function comparePassword(email, password) {
  const user = await User.findOne({ email });

  if (!user) return false;

  const isValid = await bcrypt.compare(password, user.password); //? plain-text password, hashed password

  if (!isValid) return null;

  return user;
}

module.exports = { setUser, getUser, hashPassword, comparePassword };
