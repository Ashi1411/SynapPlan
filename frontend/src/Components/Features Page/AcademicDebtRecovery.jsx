import React from "react";
import academic_debt from "../../images/feature page/academic_debt.png";


export default function AcademicDebtRecovery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[180vh] md:h-[90vh]">
      {/* image */}
            <div style={{
                      backgroundImage: `url(${academic_debt})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className="flex flex-col justify-center p-6 md:p-10 min-h-[90vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"></div>

      {/* content */}
      <div
        style={{ background: "var(--card-color-1)" }}
        className="flex flex-col justify-center p-20 h-[90vh]"
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
