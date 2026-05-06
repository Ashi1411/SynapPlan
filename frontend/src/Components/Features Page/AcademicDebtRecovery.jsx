import React from "react";
import academic_debt from "../../images/feature page/academic_debt.png";


export default function AcademicDebtRecovery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* image */}
            <div className="flex flex-col justify-center min-h-[30vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:min-h-screen overflow-hidden">
                    <img
                      src={academic_debt}
                      alt="Academic Debt"
                      className="
                        w-full 
                        h-full 
                        object-cover
                      "
                    />
                  </div>

      {/* content */}
      <div
        style={{ background: "var(--card-color-1)" }}
        className="flex flex-col justify-center px-6 py-10 md:px-16 lg:px-20 min-h-[50vh] md:min-h-screen"
      >
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-center"
        >
          Academic Debt Recovery Engine
        </h1>
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-center mb-4"
        >
          Smart Recovery for Missed Work
        </p>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-center"
        >
          Instead of stacking overdue tasks, the system analyzes how much work
          was missed and automatically selects a recovery strategy — compressing
          sessions, redistributing tasks, or prioritizing essential topics.
        </p>
      </div>
    </div>
  );
}
