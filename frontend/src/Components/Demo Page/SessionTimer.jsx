import React from "react";
import image from "../../images/demo page/focus_timer.png";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function SessionTimer() {
  return (
    <div
      style={{ background: "var(--card-color-1)" }}
      className="p-4 md:p-8 lg:p-10"
    >
      <motion.h1
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center p-4 font-bold"
      >
        Smart Session Timer Demo
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: "var(--dashboard-hero-paragraph-size)",
          color: "var(--dashboard-hero-paragraph-color)",
        }}
        className="font-semibold px-4 md:px-10 pb-10 md:pb-20 text-center"
      >
        Stay focused with intelligent sessions, adaptive breaks, and real-time
        productivity tracking.
      </motion.p>

      <motion.div
        className="mx-0 md:mx-16"
        {...fadeUp}
        transition={{ delay: 0.5 }}
      >
        <img
          src={image}
          alt="session timer view"
          style={{ borderColor: "var(--navbar-logo-color)" }}
          className="border-2 md:border-4 mb-14 rounded-3xl"
        />
      </motion.div>
    </div>
  );
}
