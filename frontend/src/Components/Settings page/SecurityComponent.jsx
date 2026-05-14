import React, { useEffect, useState } from "react";
import {
  getUserDetails,
  editStudyHours,
  changePassword,
  deleteAccount,
} from "../../api/auth";

import image from "../../images/settings page/security.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function SecurityComponent() {
  const [isEditingHours, setIsEditingHours] = useState(false);
  const [maxHours, setMaxHours] = useState(0);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  //! for getting max study hours
  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserDetails();

      setMaxHours(res.data.maxStudyHoursPerDay);
    };

    fetchData();
  }, []);

  //! handle save hours
  const handleSaveHours = async () => {
    try {
      const res = await editStudyHours({
        maxStudyHours: maxHours,
      });

      setMaxHours(res.data.user.maxStudyHoursPerDay);
      setIsEditingHours(false);
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  //! handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //! handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();


    const { password, confirmPassword } = formData;

    //? required fields
    if (!password || !confirmPassword) {
      toast.error("All the fields are required");
      return;
    }

    //? password match
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password are not same");
      return;
    }

    //? password length
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await changePassword({
        newPassword: password,
        confirmPassword: confirmPassword,
      });

      toast.success("Password changed successfully");
      setFormData({
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup Failed");
    }
  };

  //! delete account
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?",
    );

    if (!confirmDelete) return;

    try {
      await deleteAccount();

      toast.success("Account deleted successfully");

      window.location.href = "/login"; // redirect
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div
      style={{ background: "var(--card-color-1)" }}
      className="px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 min-h-screen"
    >
      <motion.h1
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-6 sm:pt-10 pb-2 font-bold px-2"
      >
        STUDY PREFERENCES AND SECURITY
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* content */}
        <div className="order-2 md:order-1 w-full max-w-xl mx-auto md:mx-0">
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="my-4">
            <h2
              style={{
                color: "var(--dashboard-hero-heading-color)",
                fontSize: "var(--dashboard-hero-subheading-size)",
              }}
              className="font-bold"
            >
              Max Study Hours Per Day (hours)
            </h2>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                {isEditingHours ? (
                  <input
                    type="number"
                    value={maxHours}
                    onChange={(e) => setMaxHours(Number(e.target.value))}
                    className="p-2 border rounded"
                    style={{
                      color: "var(--dashboard-hero-paragraph-color)",
                      fontSize: "var(--dashboard-hero-paragraph-size)",
                      background: "var(--card-color-2)",
                    }}
                  />
                ) : (
                  <p
                    style={{
                      color: "var(--dashboard-hero-paragraph-color)",
                      fontSize: "var(--dashboard-hero-paragraph-size)",
                    }}
                    className="font-semibold"
                  >
                    {maxHours} hrs
                  </p>
                )}

                {!isEditingHours ? (
                  <button
                    onClick={() => setIsEditingHours(true)}
                    className="px-4 py-1 rounded-2xl font-bold my-1"
                    style={{
                      background: "var(--login-button-background)",
                      color: "var(--login-button-text-color)",
                    }}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={handleSaveHours}
                    className="px-4 py-1 rounded-2xl font-bold my-1"
                    style={{
                      background: "var(--login-button-background)",
                      color: "var(--login-button-text-color)",
                    }}
                  >
                    Save
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="my-4">
            <h2
              style={{
                color: "var(--dashboard-hero-heading-color)",
                fontSize: "var(--dashboard-hero-subheading-size)",
              }}
              className="font-bold"
            >
              Change Password
            </h2>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                color: "var(--dashboard-hero-paragraph-color)",
                fontSize: "var(--dashboard-hero-paragraph-size)",
                background: "var(--card-color-2)",
              }}
              className="font-semibold w-full p-2 rounded-md"
            ></input>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="my-4">
            <h2
              style={{
                color: "var(--dashboard-hero-heading-color)",
                fontSize: "var(--dashboard-hero-subheading-size)",
              }}
              className="font-bold"
            >
              Confirm Changed Password
            </h2>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{
                color: "var(--dashboard-hero-paragraph-color)",
                fontSize: "var(--dashboard-hero-paragraph-size)",
                background: "var(--card-color-2)",
              }}
              className="font-semibold w-full p-2 rounded-md"
            ></input>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.5 }}
            className="my-6 text-center"
          >
            <button
              onClick={handleSubmit}
              style={{
                background: "var(--login-button-background)",
                color: "var(--login-button-text-color)",
                fontSize: "var(--dashboard-today-plan-button-size)",
              }}
              className="px-6 sm:px-10 py-2 rounded-2xl font-bold text-sm sm:text-base"
            >
              Change Password
            </button>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.5 }}
            className="my-6 text-center"
          >
            <button
              onClick={handleDeleteAccount}
              style={{
                background: "var(--login-button-background)",
                color: "var(--login-button-text-color)",
                fontSize: "var(--dashboard-today-plan-button-size)",
              }}
              className="px-6 sm:px-10 py-2 rounded-2xl font-bold text-sm sm:text-base"
            >
              Delete Account
            </button>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3 }}
          style={{ backgroundImage: `url(${image})` }}
          className="
                  order-1
                  md:order-2
                  flex
                  items-center
                  justify-center
                  w-full
                  min-h-[300px]
                  sm:min-h-[400px]
                  md:min-h-[600px]
                  p-2
                  bg-contain
                  bg-center
                  bg-no-repeat
                  rounded-2xl
                  overflow-hidden
                "
        ></motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}
