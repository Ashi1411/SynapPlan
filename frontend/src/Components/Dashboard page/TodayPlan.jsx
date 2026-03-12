import React from "react";

export default function TodayPlan() {
  return (
    <div
      style={{ background: "var(--design-engine-background" }}
      className="p-10 px-40"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-10 font-bold"
      >
        TODAY'S PLAN
      </h1>

      <div className="grid grid-cols-2 gap-14 mb-20 p-10">
        {/* card - 1 */}
        <div
          style={{ background: "var(--decision-engine-heading)" }}
          className="rounded-2xl"
        >
          <h2
            style={{
              color: "var(--section-subheading-color)",
              fontSize: "var(--feature-heading-size)",
            }}
            className="text-center m-3 font-semibold"
          >
            Physics 
          </h2>
          <div
            style={{ background: "var(--decision-engine-paragraph)" }}
            className="rounded-2xl text-center p-2"
          >
            <p
              style={{
                color: "var(--section-heading-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Duration : 60 min
            </p>

            <p
              style={{
                color: "var(--section-heading-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
                Intensity : High
            </p>

            <button
            style={{
              fontSize: "var(--dashboard-today-plan-button-size)",
              color: "var(--hero-button-color)",
              background: "var(--decision-engine-heading)" 
            }}
            className="px-10 py-1 rounded-2xl m-2 font-bold"
          >
            Try Demo
          </button>
          </div>
        </div>
      </div>

      {/* add subject button */}
        <button
            style={{
              fontSize: "var(--dashboard-today-plan-button-size)",
              color: "var(--hero-button-color)",
              background: "var(--decision-engine-heading)" 
            }}
            className="px-10 py-1 rounded-2xl m-2 font-bold"
          >
            + Add Subject
          </button>
    </div>
  );
}
