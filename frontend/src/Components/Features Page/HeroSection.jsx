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
          Powerful Tools Designed Around Your Study Behavior
        </h1>
        <p
          style={{
            fontSize: "var(--hero-section-subheading)",
            color: "var(--hero-subheading-color)",
          }}
          className="font-bold"
        >
          Our intelligent system combines behavioral analysis, adaptive
          scheduling, and smart automation to create a study experience tailored
          uniquely for you.
        </p>
        <p
          style={{
            fontSize: "var(--hero-section-paragraph)",
            color: "var(--hero-paragraph-color)",
          }}
          className="font-semibold"
        >
          From tracking your focus sessions to predicting your optimal study
          time, every feature is designed to help you stay consistent, reduce
          stress, and achieve better results with less effort.
        </p>

        <div className="flex gap-10 m-10">
          <button
            style={{
              fontSize: "var(--hero-section-button)",
              color: "var(--hero-button-color)",
            }}
            className="px-5 py-1 rounded-2xl hero-btn"
          >
            Explore Features
          </button>
          <button
            style={{
              fontSize: "var(--hero-section-button)",
              color: "var(--hero-button-color)",
            }}
            className="px-5 py-1 rounded-2xl hero-btn"
          >
            Try Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}
