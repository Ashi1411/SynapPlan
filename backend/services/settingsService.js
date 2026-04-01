const User = require("../models/user");
const Subject = require("../models/subject");
const Session = require("../models/session");

//todo for password hashing
const bcrypt = require("bcrypt");

//todo for transactional data
const mongoose = require("mongoose");

//! get the details of current user
async function getUserDetails(userId) {
  const user = await User.findOne({ _id: userId });

  if (!user) throw new Error("User not found");

  return {
    name: user.fullname,
    email: user.email,
    interests: user.interests,
    maxStudyHoursPerDay: user.maxStudyHoursPerDay,
  };
}

//! edit profile -> fullname and interests
async function editProfile(userId, data) {
  const { fullname, interests } = data;

  const updateFields = {};

  // update fullname if modified
  if (fullname && typeof fullname === "string") {
    updateFields.fullname = fullname.trim();
  }

  // update interests if modified
  if (interests && typeof interests === "string") {
    updateFields.interests = interests.trim();
  }

  const user = await User.findByIdAndUpdate(userId, updateFields, {
    new: true,
  });

  if (!user) {
    throw new Error("User doesn't exists");
  }

  return user;
}

//! edit max study hours per day
async function editStudyHours(userId, maxStudyHours) {
  const user = await User.findByIdAndUpdate(
    userId,
    { maxStudyHoursPerDay: maxStudyHours },
    {
      new: true,
    },
  );

  if (!user) {
    throw new Error("User doesn't exists");
  }

  return user;
}

//! change password
async function changePassword(userId, data) {
  const { newPassword, confirmPassword } = data;

  if (!newPassword || !confirmPassword) {
    throw new Error("All fields are required");
  }

  // if both new password and confirm password is not equal
  if (newPassword !== confirmPassword) {
    throw new Error("new password and confirm password are not same");
  }

  if (newPassword.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User doesn't exist");
  }

  //? password hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  user.password = hashedPassword;

  await user.save();

  return user;
}

//! delete user account
//! delete account with all related data (transactional)
async function deleteAccount(userId) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // ✅ check if user exists
    const user = await User.findById(userId).session(session);
    if (!user) {
      throw new Error("User not found");
    }

    // ✅ delete related sessions
    await Session.deleteMany({ userId }).session(session);

    // ✅ delete related subjects
    await Subject.deleteMany({ userId }).session(session);

    // ✅ delete user
    await User.findByIdAndDelete(userId).session(session);

    // ✅ commit transaction
    await session.commitTransaction();
    session.endSession();

    return { message: "Account and all related data deleted successfully" };
  } catch (err) {
    // ❌ rollback everything if error occurs
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
}

//! get today's session notifications
async function getTodayNotification(userId) {
  const today = new Date();
  
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);

  const sessions = await Session.find({
    userId,
    date: {$gte: today, $lt: tomorrow}
  })

  if (sessions.length === 0) {
    return ["Today is a Free Day.", "Enjoy by watching some movies or playing some sports :)"]
  }

  const notifications = [];

  const hasPending = sessions.some(s => s.status === "pending");
  const hasActive = sessions.some(s => s.status === "active");
  const hasBreak = sessions.some(s => s.status === "break");
  const hasCompleted = sessions.some(s => s.status === "completed");

  const allCompleted = sessions.every(s => s.status === "completed");

  if (hasPending) {
    notifications.push("Some Sessions are pending. Let's go! Stay focused 💪")
  }

  if (hasActive) {
    notifications.push("Some Sessions are active. You're doing great — keep going 🚀");
  }

  if (hasBreak) {
    notifications.push("Some Session paused — don't lose momentum!");
  }

  if (hasCompleted) {
    notifications.push("🎉 Some Sessions completed! Great job 👏");
  }

  if (allCompleted) {
    notifications.push("Daily goal achieved! Amazing work 🎯");
  }


  return notifications;
}


module.exports = {
  getUserDetails,
  editProfile,
  editStudyHours,
  changePassword,
  deleteAccount,
  getTodayNotification
};
