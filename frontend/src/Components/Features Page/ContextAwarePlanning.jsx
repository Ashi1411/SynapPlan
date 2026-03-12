import React from "react";

export default function ContextAwarePlanning() {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      {/* content */}
      <div
        style={{ background: "var(--card-color-2)" }}
        className="flex flex-col justify-center p-20"
      >
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-center"
        >
          Context-Aware Planning
        </h1>
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-center mb-4"
        >
          Plans That Adapt to Real Life
        </p>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-center"
        >
          External factors like your calendar availability or daily workload are
          considered when generating plans. Busy days get lighter schedules,
          while free days are optimized for deeper study sessions.
        </p>
      </div>

      <div>{/* image */}</div>
    </div>
  );
}
