import React from "react";
import "../../styles/global.css";
import cta_section from "../../images/home page/home_page_cta_section.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function CTA() {
  return (
    <div>
      <div
        style={{ background: "var(--cta-section-color)" }}
        className="px-4 sm:px-8 md:px-16 py-16 md:py-24"
      >
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1 }}
          style={{
            backgroundImage: `url(${cta_section})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="mx-auto flex flex-col items-center justify-center p-6 md:p-10 w-full md:w-[80%] lg:w-[70%] rounded-2xl"
        >
          <h2
            style={{
              color: "var(--section-heading-color)",
              fontSize: "var(--section-heading-size)",
            }}
            className="font-bold"
          >
            Ready to Upgrade Your Study System?
          </h2>
          <p
            style={{
              color: "var(--section-paragraph-color)",
              fontSize: "var(--section-paragraph-size)",
            }}
            className="font-semibold text-center"
          >
            Start using an intelligent planner that adapts to your habits,
            improves consistency, and helps you achieve better results without
            burnout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
            <Link to="/features">
              <button
                style={{
                  fontSize: "var(--hero-section-button)",
                  color: "var(--hero-button-color)",
                }}
                className="w-full sm:w-auto px-5 py-2 rounded-2xl font-semibold hero-btn"
              >
                Explore Features
              </button>
            </Link>

            <Link to="/signup">
              <button
                style={{
                  fontSize: "var(--hero-section-button)",
                  color: "var(--hero-button-color)",
                }}
                className="w-full sm:w-auto px-5 py-2 rounded-2xl font-semibold hero-btn"
              >
                Create Free Account
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
