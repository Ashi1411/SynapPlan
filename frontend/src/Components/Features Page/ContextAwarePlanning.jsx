import React from "react";
import context_aware from "../../images/feature page/context_aware.png";

export default function ContextAwarePlanning() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* content */}
      <div
        style={{ background: "var(--card-color-2)" }}
        className="flex flex-col justify-center px-6 py-10 md:px-16 lg:px-20 min-h-[50vh] md:min-h-screen order-2 md:order-1"
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

            <div className="flex flex-col justify-center min-h-[30vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)] order-1 md:order-2"
                  >
                    <img
                    src={context_aware}
                    alt="Cognitive Load Pairing"
                    className="
                    w-full
                    h-full
                    object-cover"/>
                  </div>
    </div>
  );
}
