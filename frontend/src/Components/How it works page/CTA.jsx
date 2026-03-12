import React from "react";
import "../../styles/global.css";

export default function CTA() {
  return (
    <div>
      <div
        style={{ background: "var(--cta-section-color)" }}
        className="p-16 pb-40"
      >
        <div className="mx-auto flex flex-col items-center justify-center p-10 w-[70%]">
          <h2
            style={{
              color: "var(--section-heading-color)",
              fontSize: "var(--section-heading-size)",
            }}
            className="font-bold"
          >
            Experience the Adaptive Study Engine
          </h2>
          <p
            style={{
              color: "var(--section-paragraph-color)",
              fontSize: "var(--section-paragraph-size)",
            }}
            className="font-semibold text-center"
          >
            Start using a planner that automatically adapts to your performance and study habits.
          </p>
          <div className="flex gap-10 mx-10 mt-10 mb-4">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn"
            >
              Try Live Demo
            </button>
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn"
            >
              Create Free Account
            </button>
          </div>
          <p
            style={{
              fontSize: "var(--hero-section-subheading)",
              color: "var(--hero-subheading-color)",
            }}
            className="font-bold"
          >
            No setup required • Works instantly • Free to try
          </p>
        </div>
      </div>
    </div>
  );
}
