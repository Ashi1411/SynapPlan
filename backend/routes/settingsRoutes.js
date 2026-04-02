const express = require("express");
const router = express.Router();


const {
  getUserDetailsController,
  editProfileController,
  editStudyHoursController,
  changePasswordController,
  deleteAccountController,
  getNotificationController
} = require("../controllers/settingController");


//todo routes
//! get user details
router.get("/details", getUserDetailsController);

//! edit profile -> fullname and interests
router.put("/edit", editProfileController);

//! edit study hours
router.put("/study-hours", editStudyHoursController);

//! change password
router.put("/change-password", changePasswordController);

//! delete account
router.delete("/delete-account", deleteAccountController);

//! today's notifications 
router.get("/notifications", getNotificationController);


module.exports = router;