import React from "react";

export default function SignupCard() {
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

          <form>
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
                type="text"
                name="name"
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
                type="text"
                name="confirmPassword"
                style={{ background: "var(--login-input-background)" }}
                className="w-[90%]"
              ></input>
            </div>
          </form>


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
