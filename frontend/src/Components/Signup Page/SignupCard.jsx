import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImage from "../../images/login and signup pages/signup_page_image.png";

import { signup } from "../../api/auth";

//! react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function SignupCard() {
  const navigate = useNavigate();

  const [formData, setFromData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const { fullname, email, password, confirmPassword } = formData;

    //? required fields
    if (!fullname || !email || !password || !confirmPassword) {
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

    //? main logic
    try {
      const res = await signup({ fullname, email, password });

      toast.success("Account Created Successfully");

      if (res.data.success) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 4000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div
      style={{ background: "var(--login-page)" }}
      className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-8 md:py-10 flex items-center justify-center"
    >
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{ background: "var(--login-page-card)" }}
        className="rounded-3xl grid grid-cols-1 md:grid-cols-2 mt-20 gap-8 md:gap-10 items-stretch overflow-hidden"
      >
        {/* image */}
        <div className=" md:h-full w-full overflow-hidden rounded-2xl">
          <img
            src={signupImage}
            alt="signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* content */}
        <div className="p-6 sm:p-8 md:p-10 lg:px-20">
          <h1
            style={{
              color: "var(--login-heading-color)",
              fontSize: "var(--login-heading-size)",
            }}
            className="font-bold text-center"
          >
            Create Your Account
          </h1>
          <p
            style={{
              color: "var(--login-subheading-color)",
              fontSize: "var(--login-subheading-size)",
            }}
            className="font-bold text-center"
          >
            Join now and get your personalized study plan instantly.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <label
                style={{
                  color: "var(--login-text-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Full Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="fullname"
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-1"
              ></input>
            </div>

            <div className="mt-4">
              <label
                style={{
                  color: "var(--login-text-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-1"
              ></input>
            </div>

            <div className="mt-4">
              <label
                style={{
                  color: "var(--login-text-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-1"
              ></input>
            </div>

            <div className="mt-4">
              <label
                style={{
                  color: "var(--login-text-color)",
                  fontSize: "var(--login-text-size)",
                }}
                className="font-[700] block"
              >
                Confirm Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                style={{ background: "var(--login-input-background)" }}
                className="w-full p-1"
              ></input>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <button
                style={{
                  color: "var(--login-button-text-color)",
                  fontSize: "var(--login-button-text-size)",
                  background: "var(--login-button-background)",
                }}
                className="font-semibold p-1 px-10 rounded-2xl mt-8 md:mt-12 mb-2"
              >
                Create Account
              </button>
            </div>
          </form>

          <p
            style={{
              color: "var(--login-text-color)",
              fontSize: "var(--login-text-size)",
            }}
            className="font-semibold mt-2"
          >
            Already have an account?{" "}
            <Link to={"/login"} className="font-bold">
              Log in
            </Link>
          </p>
        </div>
      </motion.div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
