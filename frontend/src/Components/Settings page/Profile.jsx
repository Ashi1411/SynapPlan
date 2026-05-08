import React, { useEffect, useState } from "react";
import { getUserDetails, editProfile } from "../../api/auth";
//! react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "../../images/settings page/profile.png";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    interests: "",
  });

  useEffect(() => {
    async function fetchDetails() {
      const res = await getUserDetails();
      setUserData(res.data);
      console.log(res.data);

      setForm({
        fullname: res.data.name || "",
        interests: res.data.interests || "",
      });
    }

    fetchDetails();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await editProfile(form);

      const updated = await getUserDetails(); // refetch
      setUserData(updated.data);

      setIsEditing(false);
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div
      style={{ background: "var(--card-color-2)" }}
      className="mt-16 px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* profile image */}
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <img
            src={image}
            alt="profile_image"
            className="mb-4 sm:mb-6 md:mb-8 mx-auto w-32 sm:w-40 md:w-52 lg:w-60 h-auto object-contain"
          ></img>
        </motion.div>

        {/* user details */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-stretch">
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              style={{ background: "var(--card-color-1)" }}
              className="px-4 sm:px-6 md:px-10 py-3 sm:py-4 m-2 sm:m-3 md:m-4 rounded-2xl"
            >
              <h2
                style={{
                  color: "var(--dashboard-hero-heading-color)",
                  fontSize: "var(--dashboard-hero-subheading-size)",
                }}
                className="font-bold"
              >
                Name
              </h2>
              <p
                style={{
                  color: "var(--dashboard-hero-paragraph-color)",
                  fontSize: "var(--dashboard-hero-paragraph-size)",
                }}
                className="font-semibold"
              >
                {isEditing ? (
                  <input
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    className="bg-transparent border-b outline-none w-full"
                  />
                ) : (
                  userData?.name
                )}
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              style={{ background: "var(--card-color-1)" }}
              className="px-4 sm:px-6 md:px-10 py-3 sm:py-4 m-2 sm:m-3 md:m-4 rounded-2xl"
            >
              <h2
                style={{
                  color: "var(--dashboard-hero-heading-color)",
                  fontSize: "var(--dashboard-hero-subheading-size)",
                }}
                className="font-bold"
              >
                Email
              </h2>
              <p
                style={{
                  color: "var(--dashboard-hero-paragraph-color)",
                  fontSize: "var(--dashboard-hero-paragraph-size)",
                }}
                className="font-semibold"
              >
                {userData?.email}
              </p>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            style={{ background: "var(--card-color-1)" }}
            className="px-4 sm:px-6 md:px-10 py-3 sm:py-4 m-2 sm:m-3 md:m-4 rounded-2xl"
          >
            <h2
              style={{
                color: "var(--dashboard-hero-heading-color)",
                fontSize: "var(--dashboard-hero-subheading-size)",
              }}
              className="font-bold"
            >
              Interests
            </h2>
            <p
              style={{
                color: "var(--dashboard-hero-paragraph-color)",
                fontSize: "var(--dashboard-hero-paragraph-size)",
              }}
              className="font-semibold"
            >
              {isEditing ? (
                <input
                  name="interests"
                  value={form.interests}
                  onChange={handleChange}
                  className="bg-transparent border-b outline-none w-full"
                />
              ) : (
                userData?.interests || "No interests added"
              )}
            </p>
          </motion.div>
        </div>

        {/* edit profile button */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4"
        >
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              style={{
                background: "var(--login-button-background)",
                color: "var(--login-button-text-color)",
                fontSize: "var(--dashboard-today-plan-button-size)",
              }}
              className="px-6 sm:px-10 py-2 rounded-2xl font-bold text-sm sm:text-base"
            >
              Edit Profile
            </button>
          ) : (
            <div>
              <button
                onClick={handleSave}
                style={{
                  background: "var(--login-button-background)",
                  color: "var(--login-button-text-color)",
                  fontSize: "var(--dashboard-today-plan-button-size)",
                }}
                className="px-6 sm:px-10 py-2 rounded-2xl font-bold m-2 sm:m-3"
              >
                Save
              </button>

              <button
                onClick={() => {
                  setForm({
                    fullname: userData?.name || "",
                    interests: userData?.interests || "",
                  });

                  setIsEditing(false);
                }}
                style={{
                  background: "var(--login-button-background)",
                  color: "var(--login-button-text-color)",
                  fontSize: "var(--dashboard-today-plan-button-size)",
                }}
                className="px-6 sm:px-10 py-2 rounded-2xl font-bold m-2 sm:m-3"
              >
                Cancel
              </button>
            </div>
          )}
        </motion.div>
      </div>
      {/* <ToastContainer position="top-right" autoClose={3000} theme="colored" /> */}
    </div>
  );
}
