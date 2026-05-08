import React from "react";
import "../../styles/global.css";
import hero_section from "../../images/how it works page/hero_section.png";
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
          Inside the Adaptive Study Engine
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
          See how the system analyzes your behavior, detects patterns, and
          generates personalized study plans automatically.
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
          The system analyzes your study habits, detects patterns, and
          automatically builds a personalized plan that adapts to your
          performance and workload.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full sm:w-auto"
          {...fadeUp}
          transition={{ delay: 0.5 }}
        >
          <Link to="/demo">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl font-semibold hero-btn"
            >
              Try Demo
            </button>
          </Link>

          <Link to="/signup">
            <button
              style={{
                fontSize: "var(--hero-section-button)",
                color: "var(--hero-button-color)",
              }}
              className="px-5 py-1 rounded-2xl font-semibold hero-btn"
            >
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
