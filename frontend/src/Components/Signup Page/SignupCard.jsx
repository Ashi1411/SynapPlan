import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {signup} from "../../api/auth";

export default function SignupCard() {
  const navigate = useNavigate();

  const [formData, setFromData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Signup button clicked");

    const {fullname, email, password, confirmPassword} = formData;

    //? required fields 
    if (!fullname || !email || !password || !confirmPassword) {
      setError("All the fields are required");
      return;
    }

    //? password match
    if (password !== confirmPassword) {
      setError("Password and Confirm Password are not same");
      return;
    }

    //? password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }


    //? main logic
    try{
      const res = await signup({fullname, email, password});

      console.log(res.data);
      alert("Account Created Successfully");

      if (res.data.success) {
        navigate("/dashboard");
      }
    }
    catch(err) {
      console.log(err);
      setError(err.response?.data?.message || "Signup Failed");
    }
  }


  return (
    <div style={{ background: "var(--login-page)" }} className="h-[80vw] p-40">
      <div
        style={{ background: "var(--login-page-card)" }}
        className="p-10 px-20 rounded-3xl grid grid-cols-2 gap-10 flex flex-col items-center justify-center"
      >
        
        {/* image */}
        <div></div>

        {/* content */}
        <div>
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
                className="w-[90%]"
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
                className="w-[90%]"
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
                className="w-[90%]"
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
                className="w-[90%]"
              ></input>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <button
                style={{
                  color: "var(--login-button-text-color)",
                  fontSize: "var(--login-button-text-size)",
                  background: "var(--login-button-background)",
                }}
                className="font-semibold p-1 px-10 rounded-2xl mt-14 mb-2"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* displaying the error mssg */}
          {<p
            style={{
              fontSize: "var(--login-text-size)",
            }}
            className="font-semibold text-red-600 flex flex-col justify-center items-center m-4"
          >
            {error}
          </p>}

          <p
            style={{
              color: "var(--login-text-color)",
              fontSize: "var(--login-text-size)",
            }}
            className="font-semibold"
          >
            Already have an account? Log in
          </p>

          <h2
            style={{
              color: "var(--login-heading-color)"
            }}
            className="font-bold text-center text-4xl mt-10"
          >
            OR
          </h2>

          <div className="flex flex-col justify-center items-center ">
            <button
              style={{
                color: "var(--login-button-text-color)",
                fontSize: "var(--login-button-text-size)",
                background: "var(--login-button-background)",
              }}
              className="font-semibold p-1 px-10 rounded-2xl mt-14 mb-2"
            >
              Try Demo Without Signing Up
            </button>
          </div>

          <p
            style={{
              color: "var(--login-text-color)",
              fontSize: "var(--login-text-size)",
            }}
            className="font-semibold"
          >
            Don't have an account? Sign up
          </p>
        </div>
      </div>
    </div>
  );
}
