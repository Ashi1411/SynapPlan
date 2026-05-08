import React from "react";
import result_section from "../../images/home page/home_page_result_section.png";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations";

export default function Results() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
      {/* image part */}
      <motion.div
      {...fadeLeft}
              viewport={{ once: false, amount: 0.3 }}
        style={{
          backgroundImage: `url(${result_section})`,
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
          className="font-bold text-left"
        >
          Instead of forcing rigid study routines, our intelligent system works
          with your natural productivity patterns to help you study more
          effectively, stay consistent, and avoid burnout.
        </p>
      </motion.div>

      {/* card part */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2"
      {...fadeRight}
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
            Study With Less Stress
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Your workload adjusts automatically so you never feel overwhelmed.
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
            Improve Consistency
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Personalized schedules make it easier to stick to your plan every
            day.
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
            Avoid Burnout
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Smart detection suggests lighter days before fatigue affects
            performance.
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
            Maximize Efficiency
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Focus on the right tasks at the right time for better results.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
