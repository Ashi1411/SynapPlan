import React from "react";
import "../../styles/global.css";
import hero_section from "../../images/feature page/feature_page_hero_section.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${hero_section})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center mx-auto text-center p-4 md:p-10 h-screen">
        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: "var(--hero-section-heading)",
            color: "var(--hero-heading-color)",
          }}
          className="font-bold leading-tight mb-4"
        >
          Powerful Tools Designed Around Your Study Behavior
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "var(--hero-section-subheading)",
            color: "var(--hero-subheading-color)",
          }}
          className="font-bold"
        >
          Our intelligent system combines behavioral analysis, adaptive
          scheduling, and smart automation to create a study experience tailored
          uniquely for you.
        </motion.p>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "var(--hero-section-paragraph)",
            color: "var(--hero-paragraph-color)",
          }}
          className="font-semibold"
        >
          From tracking your focus sessions to predicting your optimal study
          time, every feature is designed to help you stay consistent, reduce
          stress, and achieve better results with less effort.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full sm:w-auto"
          accordion
          {...fadeUp}
          transition={{ delay: 0.5 }}
        >
          <Link to="/signup">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn font-semibold"
            >
              Explore Features
            </button>
          </Link>

          <Link to="/demo">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl hero-btn font-semibold"
            >
              Try Live Demo
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
