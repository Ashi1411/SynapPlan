import React from "react";
import "../../styles/global.css";
import hero_section from "../../images/feature page/feature_page_hero_section.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${hero_section})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex flex-col justify-center items-center mx-auto text-center p-4 md:p-10 h-screen"
      >
        <h1
          style={{
            fontSize: "var(--hero-section-heading)",
            color: "var(--hero-heading-color)",
          }}
          className="font-bold leading-tight"
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

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full sm:w-auto">
          <Link to="/signup">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn font-semibold"
            >
              Explore Features
            </button>
          </Link>

          <Link to="/demo">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn font-semibold"
            >
              Try Live Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
