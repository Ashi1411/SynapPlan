import React from "react";

export default function TrustedSystem() {
  return (
    <div className="grid grid-cols-2">
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
            Data-Based Recommendations
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Decisions are generated from your real study behavior, not
            assumptions.
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
            Transparent Decision System
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Every suggestion comes with clear reasoning so you always understand
            why.
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
            Adaptive Engine
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Your planner improves over time as it learns your habits.
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
            Reliable Architecture
          </h1>
          <p
            style={{ fontSize: "var(--home-page-paragraph)" }}
            className="my-auto font-semibold"
          >
            Powered by a secure and scalable MERN-stack system.
          </p>
        </div>
      </div>

      {/* image part */}
      <div className="flex flex-col justify-center  p-10">
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-right"
        >
          TRUSTED SYSTEM
        </p>
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-right"
        >
          Built With Intelligent Technology
        </h1>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-right"
        >
          Designed using real behavioral analysis logic and modern web
          architecture to deliver accurate, adaptive study planning.
        </p>
      </div>
    </div>
  );
}
