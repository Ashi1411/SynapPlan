import React from "react";
import problem_section from "../../images/home page/home_page_problem_section.png";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations";

export default function Problem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
      {/* image part */}
      <motion.div
        {...fadeLeft}
        viewport={{ once: false, amount: 0.3 }}
        style={{
          backgroundImage: `url(${problem_section})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-center p-6 md:p-10 min-h-[50vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      >
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
          className="font-bold text-left"
        >
          Real learning isn't linear. Your planner should understand that.
        </p>
      </motion.div>

      {/* card part */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2"
        {...fadeRight}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div
          style={{ background: "var(--card-color-1)" }}
          className="flex flex-col justify-center items-center p-5 min-h-[50vh] order-1"
        >
          <h1
            style={{
              fontSize: "var(--home-page-heading)",
              color: "var(--section-subheading-color)",
            }}
            className="font-bold"
          >
            Rigid Schedules
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Fixed study plans don't match your real energy levels.
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-2)" }}
          className="flex flex-col justify-center items-center p-5 min-h-[50vh] order-2"
        >
          <h1
            style={{
              fontSize: "var(--home-page-heading)",
              color: "var(--section-subheading-color)",
            }}
            className="font-bold"
          >
            Burnout Ignored
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Most planners push harder when you actually need rest.
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-2)" }}
          className="flex flex-col justify-center items-center p-5 min-h-[50vh] order-4 md:order-3"
        >
          <h1
            style={{
              fontSize: "var(--home-page-heading)",
              color: "var(--section-subheading-color)",
            }}
            className="font-bold"
          >
            Missed Tasks Pile Up
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Skipping one session shouldn't destroy your whole plan.
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-1)" }}
          className="flex flex-col justify-center items-center p-5 min-h-[50vh] order-3 md:order-4"
        >
          <h1
            style={{
              fontSize: "var(--home-page-heading)",
              color: "var(--section-subheading-color)",
            }}
            className="font-bold"
          >
            No Personalization
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Generic schedules ignore how you actually learn best.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
