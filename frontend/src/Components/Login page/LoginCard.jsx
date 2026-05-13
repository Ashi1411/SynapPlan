import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../images/login and signup pages/login_page_image.png";

import { login } from "../../api/auth";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

//! react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginCard() {
  const navigate = useNavigate();

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("All the fields are required");
      return;
    }

    try {
      const res = await login(formData);

      console.log(res.data);
      toast.success("Login successful");

      if (res.data.success) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 4000);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Login failed");
      setTimeout(() => {
        navigate("/signup");
      }, 4000);
    }
  };

  return (
    <div
      style={{ background: "var(--login-page)" }}
      className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-10 flex items-center justify-center flex flex-col justify-center px-6 py-10 md:px-16 lg:px-20 min-h-[50vh] md:min-h-screen order-2 md:order-1"
    >
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{ background: "var(--login-page-card)" }}
        className="rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-20 min-h-screen"
      >
        {/* content */}
        <div className="order-2 md:order-1 p-6 sm:p-8 md:p-10 lg:px-20">
          <h1
            style={{
              color: "var(--login-heading-color)",
              fontSize: "var(--login-heading-size)",
            }}
            className="font-bold text-center"
          >
            Welcome Back
          </h1>
          <p
            style={{
              color: "var(--login-subheading-color)",
              fontSize: "var(--login-subheading-size)",
            }}
            className="font-bold text-center"
          >
            Log in to continue your personalized study journey.
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

            <div className="my-4">
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

            <div className="flex flex-col justify-center items-center ">
              <button
                type="submit"
                style={{
                  color: "var(--login-button-text-color)",
                  fontSize: "var(--login-button-text-size)",
                  background: "var(--login-button-background)",
                }}
                className="font-semibold p-1 px-10 rounded-2xl mt-8 md:mt-12"
              >
                Log In
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
            Don't have an account?{" "}
            <Link to={"/signup"} className="font-bold">
              Sign Up
            </Link>
          </p>
        </div>

        {/* image */}
        <div className="rounded-2xl order-1 md:order-2 flex flex-col justify-center min-h-[30vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <img
            src={loginImage}
            alt="Cognitive Load Pairing"
            className="
                  w-full
                  h-full
                  object-cover
                  rounded-2xl"
          />
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
