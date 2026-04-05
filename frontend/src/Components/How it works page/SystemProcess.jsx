import React from "react";
import step_1 from "../../images/how it works page/step_1.png";
import step_2 from "../../images/how it works page/step_2.png";
import step_3 from "../../images/how it works page/step_3.png";
import step_4 from "../../images/how it works page/step_4.png";
import step_5 from "../../images/how it works page/step_5.png";


export default function SystemProcess() {
  return (
    <div
      style={{ background: "var(--system-process-color)" }}
      className="pb-20"
    >
      <h1
        style={{
          fontSize: "var(--section-heading-size)",
          color: "var(--hero-heading-color)",
        }}
        className="text-center font-bold pt-10"
      >
        SYSTEM PROCESS
      </h1>

      <p
        style={{
          fontSize: "var(--section-paragraph-size)",
          color: "var(--hero-subheading-color)",
        }}
        className="text-center font-semibold"
      >
        Every recommendation is created through a structured decision pipeline
        that processes your real study behavior.
      </p>

      <div className="grid grid-cols-5 gap-10 p-10">
        {/* card - 1 */}
        <div>
          <div>
            <img src={step_1}></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold"
            >
              Input Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold"
            >
              The system starts by collecting essential information such as
              subjects, deadlines, difficulty levels, and your available study
              time. This defines your learning scope and constraints.
            </p>
          </div>
        </div>

        {/* card - 2 */}
        <div>
          <div>
            <img src={step_2}></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold"
            >
              Tracking Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold"
            >
              Each time you study, the system records session duration,
              completion percentage, focus consistency, and break patterns. This
              real-time data reflects your actual performance.
            </p>
          </div>
        </div>

        {/* card - 3 */}
        <div>
          <div>
            <img src={step_3}></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold"
            >
              Analysis Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold"
            >
              Your historical data is analyzed to detect productivity trends,
              preferred study times, fatigue signals, and consistency levels.
              This helps the system understand how you learn best.
            </p>
          </div>
        </div>

        {/* card - 4 */}
        <div>
          <div>
            <img src={step_4}></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold"
            >
              Decision Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold"
            >
              Algorithms evaluate workload difficulty, upcoming deadlines, and
              cognitive load to determine the most effective schedule for the
              next study session.
            </p>
          </div>
        </div>

        {/* card - 5 */}
        <div>
          <div>
            <img src={step_5}></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold"
            >
              Output Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold"
            >
              Based on analysis results, the planner generates a customized
              daily plan that balances subjects, prevents overload, and
              maximizes productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
