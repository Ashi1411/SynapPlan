import React from "react";

export default function Problem() {
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
          THE PROBLEM
        </p>
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-left"
        >
          Most Study Planners Fail Because They Don't Adapt
        </h1>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-left"
        >
          Real learning isn't linear. Your planner should understand that.
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
            Rigid Schedules
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Fixed study plans don't match your real energy levels.
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
            Burnout Ignored
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Most planners push harder when you actually need rest.
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
            Missed Tasks Pile Up
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Skipping one session shouldn't destroy your whole plan.
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
            No Personalization
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Generic schedules ignore how you actually learn best.
          </p>
        </div>
      </div>
    </div>
  );
}
