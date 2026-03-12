import React from "react";

export default function CognitiveLoadPairing() {
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
          Cognitive Load Pairing
        </h1>
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-center mb-4"
        >
          Balanced Mental Workload
        </p>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-center"
        >
          Subjects are categorized based on cognitive intensity. The planner
          intelligently pairs heavy subjects with lighter ones to prevent mental
          fatigue while maintaining consistent progress.
        </p>
      </div>

      <div>{/* image */}</div>
    </div>
  );
}
