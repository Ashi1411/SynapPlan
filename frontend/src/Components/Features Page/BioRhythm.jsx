import React from "react";
import bio_rhythm from "../../images/feature page/bio_rhythm.png";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations";

export default function BioRhythm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* image */}
      <motion.div
        className="flex flex-col justify-center min-h-[30vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:min-h-screen overflow-hidden"
        {...fadeLeft}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src={bio_rhythm}
          alt="Bio Rhythm"
          className="
            w-full 
            h-full 
            object-cover
          "
        />
      </motion.div>

      {/* content */}
      <motion.div
        {...fadeRight}
        viewport={{ once: false, amount: 0.3 }}
        style={{ background: "var(--card-color-1)" }}
        className="flex flex-col justify-center px-6 py-10 md:px-16 lg:px-20 min-h-[50vh] md:min-h-screen"
      >
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-center"
        >
          Bio-Rhythm Detection
        </h1>
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-center mb-4"
        >
          Study When You're Naturally Most Productive
        </p>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-center"
        >
          The system analyzes your session start times, completion rates, and
          focus duration to identify your peak productivity hours. Once
          detected, it automatically schedules difficult subjects during those
          high-performance periods.
        </p>
      </motion.div>
    </div>
  );
}
