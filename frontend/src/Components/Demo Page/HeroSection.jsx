import React from "react";
import "../../styles/global.css";
import hero_section from "../../images/demo page/hero_section.png";
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
          className="font-bold leading-tight mb-4"
        >
          Your AI-Powered Study Companion
        </h1>
        <p
          style={{
            fontSize: "var(--hero-section-subheading)",
            color: "var(--hero-subheading-color)",
          }}
          className="font-bold"
        >
          Experience how SynapPlan intelligently plans sessions, tracks productivity, and optimizes your focus in real time.
        </p>
        <p
          style={{
            fontSize: "var(--hero-section-paragraph)",
            color: "var(--hero-paragraph-color)",
          }}
          className="font-semibold"
        >
          SynapPlan combines intelligent planning, focus tracking, and smart analytics to help students study more efficiently, stay consistent, and maximize productivity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full sm:w-auto">
          <Link to="/features">
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

          <Link to="/signup">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn font-semibold"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
