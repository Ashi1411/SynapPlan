const mongoose = require("mongoose");

//! Schema
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    maxStudyHoursPerDay: {
      type: Number,
      default: 8,
    },
    interests: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("user", userSchema);

module.exports = User;
