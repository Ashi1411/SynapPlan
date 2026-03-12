import React from "react";

export default function Solution() {
  return (
    <div className="grid grid-cols-2">
      {/* card part */}
      <div className="grid grid-cols-2 grid-rows-2">
        <div
          style={{ background: "var(--card-color-1)" }}
          className="flex flex-col justify-center items-center mx-auto p-5 min-h-[50vh]"
        >
          <h1
            style={{ fontSize: "var(--home-page-heading)" }}
            className="font-bold"
          >
            Adaptive Planning
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Your schedule adjusts automatically based on your real performance
            and consistency.
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-2)" }}
          className="flex flex-col justify-center items-center mx-auto p-5 min-h-[50vh]"
        >
          <h1
            style={{ fontSize: "var(--home-page-heading)" }}
            className="font-bold"
          >
            Burnout Prevention
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            The system detects productivity drops and suggests lighter days
            before burnout hits.
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-2)" }}
          className="flex flex-col justify-center items-center mx-auto p-5 min-h-[50vh]"
        >
          <h1
            style={{ fontSize: "var(--home-page-heading)" }}
            className="font-bold"
          >
            Task Recovery
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Instead of piling tasks, your planner redistributes workload
            intelligently.
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-1)" }}
          className="flex flex-col justify-center items-center mx-auto p-5 min-h-[50vh]"
        >
          <h1
            style={{ fontSize: "var(--home-page-heading)" }}
            className="font-bold"
          >
            Personalized System
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Every recommendation adapts to your habits, energy levels, and
            learning patterns.
          </p>
        </div>
      </div>

      {/* image part */}
      <div className="flex flex-col justify-center  p-10">
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-right"
        >
          THE SOLUTION
        </p>
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-right"
        >
          A Planner That Thinks Like You Do
        </h1>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-right"
        >
          Our adaptive system analyzes your study behavior, detects patterns,
          and continuously adjusts your schedule to match your productivity
          levels. Instead of forcing rigid plans, it evolves with you to
          maximize efficiency and consistency.
        </p>
      </div>
    </div>
  );
}
