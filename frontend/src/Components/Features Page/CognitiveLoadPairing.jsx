import React from "react";
import cognitive_load_pairing from "../../images/feature page/cognitive_load_pairing.png";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations";

export default function CognitiveLoadPairing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* content */}
      <motion.div
        {...fadeLeft}
        viewport={{ once: false, amount: 0.3 }}
        style={{ background: "var(--card-color-2)" }}
        className="flex flex-col justify-center px-6 py-10 md:px-16 lg:px-20 min-h-[50vh] md:min-h-screen order-2 md:order-1"
      >
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-center"
        >
          Cognitive Load Pairing
        </h1>
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-center mb-4"
        >
          Balanced Mental Workload
        </p>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-center"
        >
          Subjects are categorized based on cognitive intensity. The planner
          intelligently pairs heavy subjects with lighter ones to prevent mental
          fatigue while maintaining consistent progress.
        </p>
      </motion.div>

      {/* image */}
      <motion.div
        className="flex flex-col justify-center min-h-[30vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)] order-1 md:order-2"
        {...fadeRight}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src={cognitive_load_pairing}
          alt="Cognitive Load Pairing"
          className="
        w-full
        h-full
        object-cover"
        />
      </motion.div>
    </div>
  );
}
