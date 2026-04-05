import React from "react";
import "../../styles/global.css";
import hero_section from "../../images/home page/home_page_hero_section.png";
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
        style={{ width: "var(--width-of-section)" }}
        className="flex flex-col justify-center items-center mx-auto text-center h-screen"
      >
        <h1
          style={{
            fontSize: "var(--hero-section-heading)",
            color: "var(--hero-heading-color)",
          }}
          className="font-bold mb-4"
        >
          The Planner That Adapts to You
        </h1>
        <p
          style={{
            fontSize: "var(--hero-section-subheading)",
            color: "var(--hero-subheading-color)",
          }}
          className="font-bold mb-4"
        >
          A smart system that analyzes your study behavior and generates the
          most effective daily plan automatically.
        </p>
        <p
          style={{
            fontSize: "var(--hero-section-paragraph)",
            color: "var(--hero-paragraph-color)",
          }}
          className="font-semibold"
        >
          Monitor productivity, balance cognitive load, recover missed work, and
          stay consistent with intelligent recommendations designed to maximize
          results without burnout.
        </p>

        <div className="flex gap-10 m-10">
          <Link to="/demo">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn font-semibold"
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
