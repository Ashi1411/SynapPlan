import React from "react";
import "../../styles/global.css";
import hero_section from "../../images/how it works page/hero_section.png";
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
      <div className="flex flex-col justify-center items-center mx-auto text-center p-4 md:p-10 h-screen">
        <h1
          style={{
            fontSize: "var(--hero-section-heading)",
            color: "var(--hero-heading-color)",
          }}
          className="font-bold leading-tight"
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

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full sm:w-auto">
          <Link to="/demo">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn"
            >
              Try Demo
            </button>
          </Link>

          <Link to="/signup">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
