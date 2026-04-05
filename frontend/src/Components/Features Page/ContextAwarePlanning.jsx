import React from "react";
import context_aware from "../../images/feature page/context_aware.png";

export default function ContextAwarePlanning() {
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

            {/* image */}
            <div style={{
                      backgroundImage: `url(${context_aware})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className="flex flex-col justify-center p-6 md:p-10 min-h-[90vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)] order-1 md:order-2"></div>
    </div>
  );
}
