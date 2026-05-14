import React from "react";
import step_1 from "../../images/how it works page/step_1.png";
import step_2 from "../../images/how it works page/step_2.png";
import step_3 from "../../images/how it works page/step_3.png";
import step_4 from "../../images/how it works page/step_4.png";
import step_5 from "../../images/how it works page/step_5.png";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function SystemProcess() {
  return (
    <div
      style={{ background: "var(--system-process-color)" }}
      className="pb-20"
    >
      <motion.h1
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{
          fontSize: "var(--section-heading-size)",
          color: "var(--hero-heading-color)",
        }}
        className="text-center font-bold pt-8 md:pt-10 px-4"
      >
        SYSTEM PROCESS
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: "var(--section-paragraph-size)",
          color: "var(--hero-subheading-color)",
        }}
        className="text-center font-semibold px-4 sm:px-10 md:px-20 mb-6 md:mb-10"
      >
        Every recommendation is created through a structured decision pipeline
        that processes your real study behavior.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-12 py-10">
        {/* card - 1 */}
        <motion.div
          className="px-4 sm:px-4"
          {...fadeUp}
          transition={{ delay: 0.5 }}
        >
          <div>
            <img src={step_1} alt="step 1"></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold mt-1 md:mt-4"
            >
              Input Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold mt-1 text-sm sm:text-base"
            >
              The system starts by collecting essential information such as
              subjects, deadlines, difficulty levels, and your available study
              time. This defines your learning scope and constraints.
            </p>
          </div>
        </motion.div>

        {/* card - 2 */}
        <motion.div
          className="px-2 sm:px-4"
          {...fadeUp}
          transition={{ delay: 0.5 }}
        >
          <div>
            <img src={step_2} alt="step 2"></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold  mt-3 md:mt-4"
            >
              Tracking Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold mt-2 text-sm sm:text-base"
            >
              Each time you study, the system records session duration,
              completion percentage, focus consistency, and break patterns. This
              real-time data reflects your actual performance.
            </p>
          </div>
        </motion.div>

        {/* card - 3 */}
        <motion.div
          className="px-2 sm:px-4"
          {...fadeUp}
          transition={{ delay: 0.5 }}
        >
          <div>
            <img src={step_3} alt="step 3"></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold mt-3 md:mt-4"
            >
              Analysis Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold mt-2 text-sm sm:text-base"
            >
              Your historical data is analyzed to detect productivity trends,
              preferred study times, fatigue signals, and consistency levels.
              This helps the system understand how you learn best.
            </p>
          </div>
        </motion.div>

        {/* card - 4 */}
        <motion.div
          className="px-2 sm:px-4"
          {...fadeUp}
          transition={{ delay: 0.5 }}
        >
          <div>
            <img src={step_4} alt="step 4"></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold mt-3 md:mt-4"
            >
              Decision Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold mt-2 text-sm sm:text-base"
            >
              Algorithms evaluate workload difficulty, upcoming deadlines, and
              cognitive load to determine the most effective schedule for the
              next study session.
            </p>
          </div>
        </motion.div>

        {/* card - 5 */}
        <motion.div
          className="px-2 sm:px-4"
          {...fadeUp}
          transition={{ delay: 0.5 }}
        >
          <div>
            <img src={step_5} alt="step 5"></img>
          </div>
          <div>
            <h2
              style={{
                fontSize: "var(--section-paragraph-size)",
                color: "var(--hero-paragraph-color)",
              }}
              className="text-center font-bold mt-3 md:mt-4"
            >
              Output Stage
            </h2>
            <p
              style={{
                fontSize: "var(--feature-paragraph-size)",
                color: "var(--section-paragraph-color)",
              }}
              className="text-center font-semibold mt-2 text-sm sm:text-base"
            >
              Based on analysis results, the planner generates a customized
              daily plan that balances subjects, prevents overload, and
              maximizes productivity.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
