const {
  getUserDetails,
  editProfile,
  editStudyHours,
  changePassword,
  deleteAccount,
} = require("../services/settingsService");

//! get user details
async function getUserDetailsController(req, res) {
  try {
    const userId = req.user._id;

    const userDetails = await getUserDetails(userId);

    res.json(userDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//! edit user name and interests
async function editProfileController(req, res) {
  try {
    const userId = req.user._id;
    const data = req.body;

    const updatedUser = await editProfile(userId, data);

    res.json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//! edit user max study hours
async function editStudyHoursController(req, res) {
  try {
    const userId = req.user._id;
    const {maxStudyHours} = req.body;

    const updatedUser = await editStudyHours(userId, maxStudyHours);

    res.json({
      message: "Study hours updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//! change password
async function changePasswordController(req, res) {
  try {
    const userId = req.user._id;
    const data = req.body;

    await changePassword(userId, data);

    res.json({message: "Password changed successfully"});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


//! delete user
async function deleteAccountController(req, res) {
  try {
    const userId = req.user._id;

    const result = await deleteAccount(userId);

    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  getUserDetailsController,
  editProfileController,
  editStudyHoursController,
  changePasswordController,
  deleteAccountController,
};


