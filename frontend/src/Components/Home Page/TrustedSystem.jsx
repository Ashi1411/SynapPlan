import React from "react";
import trusted_section from "../../images/home page/home_page_trusted_section.png";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations";

export default function TrustedSystem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
      {/* card part */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 order-2 md:order-1"
        {...fadeLeft}
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
            Data-Based Recommendations
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Decisions are generated from your real study behavior, not
            assumptions.
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
            Transparent Decision System
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Every suggestion comes with clear reasoning so you always understand
            why.
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
            Adaptive Engine
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Your planner improves over time as it learns your habits.
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
            Reliable Architecture
          </h1>
          <p
            style={{
              fontSize: "var(--home-page-paragraph)",
              color: "var(--section-paragraph-color)",
            }}
            className="my-auto font-bold"
          >
            Powered by a secure and scalable MERN-stack system.
          </p>
        </div>
      </motion.div>

      {/* image part */}
      <motion.div
        {...fadeRight}
        viewport={{ once: false, amount: 0.3 }}
        style={{
          backgroundImage: `url(${trusted_section})`,
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
          className="font-bold text-right"
        >
          Designed using real behavioral analysis logic and modern web
          architecture to deliver accurate, adaptive study planning.
        </p>
      </motion.div>
    </div>
  );
}
