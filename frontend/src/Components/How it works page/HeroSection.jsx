import React from "react";
import "../../styles/global.css";

export default function HeroSection() {
  return (
    <div>
      <div
        style={{ width: "var(--width-of-section)" }}
        className="flex flex-col justify-center items-center mx-auto text-center h-screen"
      >
        <h1
          style={{
            fontSize: "var(--hero-section-heading)",
            color: "var(--hero-heading-color)",
          }}
          className="font-bold"
        >
          Inside the Adaptive Study Engine
        </h1>
        <p
          style={{
            fontSize: "var(--hero-section-subheading)",
            color: "var(--hero-subheading-color)",
          }}
          className="font-bold"
        >
          See how the system analyzes your behavior, detects patterns, and
          generates personalized study plans automatically.
        </p>
        <p
          style={{
            fontSize: "var(--hero-section-paragraph)",
            color: "var(--hero-paragraph-color)",
          }}
          className="font-semibold"
        >
          The system analyzes your study habits, detects patterns, and
          automatically builds a personalized plan that adapts to your
          performance and workload.
        </p>

        <div className="flex gap-10 m-10">
          <button
            style={{
              fontSize: "var(--hero-section-button)",
              color: "var(--hero-button-color)",
            }}
            className="px-5 py-1 rounded-2xl hero-btn"
          >
            Try Demo
          </button>
          <button
            style={{
              fontSize: "var(--hero-section-button)",
              color: "var(--hero-button-color)",
            }}
            className="px-5 py-1 rounded-2xl hero-btn"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
