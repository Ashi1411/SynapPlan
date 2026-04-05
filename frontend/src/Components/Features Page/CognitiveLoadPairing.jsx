import React from "react";
import cognitive_load_pairing from "../../images/feature page/cognitive_load_pairing.png";

export default function CognitiveLoadPairing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[180vh] md:h-[90vh]">
      {/* content */}
      <div
        style={{ background: "var(--card-color-2)" }}
        className="flex flex-col justify-center p-20 order-2 md:order-1 h-[90vh]"
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

      {/* image */}
      <div
        style={{
          backgroundImage: `url(${cognitive_load_pairing})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-center p-6 md:p-10 min-h-[90vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)] order-1 md:order-2"
      ></div>
    </div>
  );
}
