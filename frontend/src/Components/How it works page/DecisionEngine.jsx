import React from "react";

export default function DecisionEngine() {
  return (
    <div
      style={{ background: "var(--design-engine-background" }}
      className="py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-10 font-bold"
      >
        DECISION ENGINE
      </h1>

      <p
        style={{
          fontSize: "var(--section-paragraph-size)",
          color: "var(--hero-subheading-color)",
        }}
        className="text-center font-semibold mb-10"
      >
        Every recommendation is generated through structured decision logic
        based on your real performance and study behavior.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-20 md:mb-40 px-2 sm:px-4 md:px-10">
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
            If productivity decreases
          </h2>
          <div
            style={{ background: "var(--decision-engine-paragraph)" }}
            className="rounded-2xl text-center"
          >
            <p
              style={{
                color: "var(--section-heading-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="p-4 font-semibold"
            >
              System reduces workload for the next session.
            </p>
          </div>
        </div>

        {/* card - 2 */}
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
            If consistency increases
          </h2>
          <div
            style={{ background: "var(--decision-engine-paragraph)" }}
            className="rounded-2xl text-center"
          >
            <p
              style={{
                color: "var(--section-heading-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="p-4 font-semibold"
            >
              Planner gradually increases challenge level.
            </p>
          </div>
        </div>

        {/* card - 3 */}
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
            If exam deadline is near
          </h2>
          <div
            style={{ background: "var(--decision-engine-paragraph)" }}
            className="rounded-2xl text-center"
          >
            <p
              style={{
                color: "var(--section-heading-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="p-4 font-semibold"
            >
              Important subjects get higher priority.
            </p>
          </div>
        </div>

        {/* card - 4 */}
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
            If study sessions are missed
          </h2>
          <div
            style={{ background: "var(--decision-engine-paragraph)" }}
            className="rounded-2xl text-center"
          >
            <p
              style={{
                color: "var(--section-heading-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="p-4 font-semibold"
            >
              Recovery mode redistributes pending tasks.
            </p>
          </div>
        </div>

        {/* card - 5 */}
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
            If fatigue signals detected
          </h2>
          <div
            style={{ background: "var(--decision-engine-paragraph)" }}
            className="rounded-2xl text-center"
          >
            <p
              style={{
                color: "var(--section-heading-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="p-4 font-semibold"
            >
              Planner switches to light study mode.
            </p>
          </div>
        </div>

        {/* card - 6 */}
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
            If performance improves
          </h2>
          <div
            style={{ background: "var(--decision-engine-paragraph)" }}
            className="rounded-2xl text-center"
          >
            <p
              style={{
                color: "var(--section-heading-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="p-4 font-semibold"
            >
              System increases task complexity gradually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
