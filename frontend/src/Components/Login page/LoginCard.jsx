import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

import {login} from "../../api/auth"

export default function LoginCard() {
  const navigate = useNavigate();

  let [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL) 

    const {email, password} = formData;

    if (!email || !password) {
      setError("All the fields are required");
      return;
    }

    try {
      const res = await login(formData);

      console.log(res.data);
      alert("Login successful");

      if (res.data.success) {
        navigate("/dashboard");
      }
    }
    catch(err) {
      console.log(err);
      alert("Invalid email or password");
      navigate("/signup");
    }
  };

  return (
    <div style={{ background: "var(--login-page)" }} className="h-[50vw] p-40">
      <div
        style={{ background: "var(--login-page-card)" }}
        className="p-10 px-20 rounded-3xl grid grid-cols-2 gap-10 flex flex-col items-center justify-center"
      >
        {/* content */}
        <div>
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
                className="w-[90%] p-1"
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
                className="w-[90%] p-1"
              ></input>
            </div>

            <p
              style={{
                color: "var(--login-subheading-color)",
                fontSize: "var(--login-subheading-size)",
              }}
              className="font-semibold"
            >
              Forgot password?
            </p>

            <div className="flex flex-col justify-center items-center ">
              <button
                type="submit"
                style={{
                  color: "var(--login-button-text-color)",
                  fontSize: "var(--login-button-text-size)",
                  background: "var(--login-button-background)",
                }}
                className="font-semibold p-1 px-10 rounded-2xl mt-14 mb-2"
              >
                Log In
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
            Don't have an account? Sign up
          </p>
        </div>

        {/* image */}
        <div></div>
      </div>
    </div>
  );
}
