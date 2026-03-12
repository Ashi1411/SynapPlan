import React from "react";

export default function HowItWorks() {
  return (
    <div style={{backgroundColor : "var(--how-it-works-color)"}}>
      <h1
        style={{
          color: "var(--section-heading-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="pt-20 p-14 flex flex-col justify-center items-center font-bold"
      >
        How It Works?
      </h1>
      <div className="grid grid-cols-4 w-[95%] g-4 mx-auto">
        {/* card - 1 */}
        <div className="flex flex-col items-center bg-cyan-100 m-4 h-[350px] mb-40">
          {/* number icon */}
          <div
            style={{
              background: "var(--number-color)",
              fontSize: "var(--how-it-works-number-size)",
              color: "var(--how-it-works-number-color)",
            }}
            className="rounded-full flex flex-col items-center justify-center p-1 aspect-[1] font-bold -translate-y-1/2"
          >
            1
          </div>

          {/* content of card */}
          <div className="flex flex-col justify-center items-center p-2">
            <h2
              style={{
                color: "var(--section-subheading-color)",
                fontSize: "var(--how-it-works-subheading-size)",
              }}
              className="font-bold"
            >
              Enter Subjects
            </h2>
            <p
              style={{
                color: "var(--section-paragraph-color)",
                fontSize: "var(--how-it-works-paragraph-size)",
              }}
              className="text-center font-semibold"
            >
              Add subjects, exam dates, and study availability.
            </p>
          </div>
        </div>

        {/* card - 2 */}
        <div className="flex flex-col items-center bg-cyan-100 m-4 h-[350px] mb-40">
          {/* number icon */}
          <div
            style={{
              background: "var(--number-color)",
              fontSize: "var(--how-it-works-number-size)",
              color: "var(--how-it-works-number-color)",
            }}
            className="rounded-full flex flex-col items-center justify-center p-1 aspect-[1] font-bold -translate-y-1/2"
          >
            2
          </div>

          {/* content of card */}
          <div className="flex flex-col justify-center items-center p-2">
            <h2
              style={{
                color: "var(--section-subheading-color)",
                fontSize: "var(--how-it-works-subheading-size)",
              }}
              className="font-bold"
            >
              Track Sessions
            </h2>
            <p
              style={{
                color: "var(--section-paragraph-color)",
                fontSize: "var(--how-it-works-paragraph-size)",
              }}
              className="text-center font-semibold"
            >
              Use focus mode while studying and your activity is recorded.
            </p>
          </div>
        </div>

        {/* card - 3 */}
        <div className="flex flex-col items-center bg-cyan-100 m-4 h-[350px] mb-40">
          {/* number icon */}
          <div
            style={{
              background: "var(--number-color)",
              fontSize: "var(--how-it-works-number-size)",
              color: "var(--how-it-works-number-color)",
            }}
            className="rounded-full flex flex-col items-center justify-center p-1 aspect-[1] font-bold -translate-y-1/2"
          >
            3
          </div>

          {/* content of card */}
          <div className="flex flex-col justify-center items-center p-2">
            <h2
              style={{
                color: "var(--section-subheading-color)",
                fontSize: "var(--how-it-works-subheading-size)",
              }}
              className="font-bold"
            >
              Behavior Analysis
            </h2>
            <p
              style={{
                color: "var(--section-paragraph-color)",
                fontSize: "var(--how-it-works-paragraph-size)",
              }}
              className="text-center font-semibold"
            >
              Productivity trends and fatigue levels are evaluated.
            </p>
          </div>
        </div>

        {/* card - 4 */}
        <div className="flex flex-col items-center bg-cyan-100 m-4 h-[350px] mb-40">
          {/* number icon */}
          <div
            style={{
              background: "var(--number-color)",
              fontSize: "var(--how-it-works-number-size)",
              color: "var(--how-it-works-number-color)",
            }}
            className="rounded-full flex flex-col items-center justify-center p-1 aspect-[1] font-bold -translate-y-1/2"
          >
            4
          </div>

          {/* content of card */}
          <div className="flex flex-col justify-center items-center p-2">
            <h2
              style={{
                color: "var(--section-subheading-color)",
                fontSize: "var(--how-it-works-subheading-size)",
              }}
              className="font-bold"
            >
              Adaptive Plan
            </h2>
            <p
              style={{
                color: "var(--section-paragraph-color)",
                fontSize: "var(--how-it-works-paragraph-size)",
              }}
              className="text-center font-semibold"
            >
              Your planner adjusts automatically for the next day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
