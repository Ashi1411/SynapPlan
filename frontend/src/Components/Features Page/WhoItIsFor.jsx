import React from "react";

export default function WhoItIsFor() {
  return (
    <div
      style={{ background: "var(--who-it-is-for-background)" }}
      className="p-10 px-40"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center mb-10 font-bold"
      >
        WHO IT'S FOR
      </h1>

      <div className="grid grid-cols-2 gap-14 mb-40">
        {/* Students */}
        <div
          style={{ background: "var(--who-card-color-1)" }}
          className="grid grid-cols-2 p-4 rounded-2xl"
        >
          {/* content */}
          <div>
            <h2
              style={{
                color: "var(--hero-heading-color)",
                fontSize: "var(--feature-heading-size)",
              }}
              className="font-bold mb-2"
            >
              Students
            </h2>
            <p
              style={{
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Manage multiple subjects and deadlines with adaptive planning.
            </p>
          </div>

          {/* image */}
          <div></div>
        </div>

        {/* Exam Aspirants */}
        <div
          style={{ background: "var(--who-card-color-2)" }}
          className="grid grid-cols-2 p-4 rounded-2xl"
        >
          {/* content */}
          <div>
            <h2
              style={{
                color: "var(--hero-heading-color)",
                fontSize: "var(--feature-heading-size)",
              }}
              className="font-bold mb-2"
            >
              Exam Aspirants
            </h2>
            <p
              style={{
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Maintain consistency during long preparation cycles.
            </p>
          </div>

          {/* image */}
          <div></div>
        </div>

        {/* Self Learners */}
        <div
          style={{ background: "var(--who-card-color-2)" }}
          className="grid grid-cols-2 p-4 rounded-2xl"
        >
          {/* content */}
          <div>
            <h2
              style={{
                color: "var(--hero-heading-color)",
                fontSize: "var(--feature-heading-size)",
              }}
              className="font-bold mb-2"
            >
              Self Learners
            </h2>
            <p
              style={{
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Stay structured while learning independently.
            </p>
          </div>

          {/* image */}
          <div></div>
        </div>

        {/* Working Professionals */}
        <div
          style={{ background: "var(--who-card-color-1)" }}
          className="grid grid-cols-2 p-4 rounded-2xl"
        >
          {/* content */}
          <div>
            <h2
              style={{
                color: "var(--hero-heading-color)",
                fontSize: "var(--feature-heading-size)",
              }}
              className="font-bold mb-2"
            >
              Working Professionals
            </h2>
            <p
              style={{
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Balance learning with daily responsibilities.
            </p>
          </div>

          {/* image */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
