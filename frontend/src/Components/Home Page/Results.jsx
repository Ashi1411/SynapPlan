import React from "react";

export default function Results() {
  return (
    <div className="grid grid-cols-2">
      {/* image part */}
      <div className="flex flex-col justify-center p-10">
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-left"
        >
          THE RESULTS
        </p>
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-left"
        >
          What You Achieve With Adaptive Planning
        </h1>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-left"
        >
          Instead of forcing rigid study routines, our intelligent system works with your natural productivity patterns to help you study more effectively, stay consistent, and avoid burnout.
        </p>
      </div>

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
            Study With Less Stress
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Your workload adjusts automatically so you never feel overwhelmed.
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
            Improve Consistency
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Personalized schedules make it easier to stick to your plan every day.
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
            Avoid Burnout
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Smart detection suggests lighter days before fatigue affects performance.
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
            Maximize Efficiency
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Focus on the right tasks at the right time for better results.
          </p>
        </div>
      </div>
    </div>
  );
}
