import React from "react";
import solution_section from "../../images/home page/home_page_solution_section.png";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations";

export default function Solution() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
      {/* card part */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 order-2 md:order-1"
      {...fadeLeft}
              viewport={{ once: false, amount: 0.3 }}>
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
            Adaptive Planning
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Your schedule adjusts automatically based on your real performance
            and consistency.
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
            Burnout Prevention
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            The system detects productivity drops and suggests lighter days
            before burnout hits.
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
            Task Recovery
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Instead of piling tasks, your planner redistributes workload
            intelligently.
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
            Personalized System
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Every recommendation adapts to your habits, energy levels, and
            learning patterns.
          </p>
        </div>
      </motion.div>

      {/* image part */}
      <motion.div
      {...fadeRight}
              viewport={{ once: false, amount: 0.3 }}
        style={{
          backgroundImage: `url(${solution_section})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-center p-6 md:p-10 order-1 md:order-2 min-h-[50vh]"
      >
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-right"
        >
          THE SOLUTION
        </p>
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-right"
        >
          A Planner That Thinks Like You Do
        </h1>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-bold text-right"
        >
          Our adaptive system analyzes your study behavior, detects patterns,
          and continuously adjusts your schedule to match your productivity
          levels. Instead of forcing rigid plans, it evolves with you to
          maximize efficiency and consistency.
        </p>
      </motion.div>
    </div>
  );
}
