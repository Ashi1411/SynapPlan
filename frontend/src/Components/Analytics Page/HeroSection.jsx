import React, { useEffect, useState } from "react";
import { getAnalytics } from "../../api/auth";

import { formatDuration } from "../../utils/formatDuration"; //  to use our second based backend data

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function HeroSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await getAnalytics();
      setData(res.data);
      console.log(res.data);
    }

    fetchDetails();
  }, []);

  return (
    <div
      style={{ background: "var(--card-color-2)" }}
      className="mt-12 px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.1 }}
          style={{
            color: "var(--hero-paragraph-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="text-center pt-6 sm:pt-10 px-2 font-bold mb-4 sm:mb-6"
        >
          OVERVIEW STATS
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-10">
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            style={{ background: "var(--card-color-1)" }}
            className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl w-full"
          >
            <h2
              style={{
                fontSize: "var(--dashboard-hero-subheading-size)",
                color: "var(--dashboard-hero-heading-color)",
              }}
              className="font-bold"
            >
              Total Study Hours (This Week)
            </h2>
            <p
              style={{
                fontSize: "var(--dashboard-hero-paragraph-size)",
                color: "var(--dashboard-hero-paragraph-color)",
              }}
              className="font-semibold"
            >
              {formatDuration(data?.durationCompleted)}
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            style={{ background: "var(--card-color-1)" }}
            className="p-4 rounded-2xl"
          >
            <h2
              style={{
                fontSize: "var(--dashboard-hero-subheading-size)",
                color: "var(--dashboard-hero-heading-color)",
              }}
              className="font-bold"
            >
              Average Completion Rate
            </h2>
            <p
              style={{
                fontSize: "var(--dashboard-hero-paragraph-size)",
                color: "var(--dashboard-hero-paragraph-color)",
              }}
              className="font-semibold"
            >
              {data?.completionRate}%
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            style={{ background: "var(--card-color-1)" }}
            className="p-4 rounded-2xl"
          >
            <h2
              style={{
                fontSize: "var(--dashboard-hero-subheading-size)",
                color: "var(--dashboard-hero-heading-color)",
              }}
              className="font-bold"
            >
              Consistency Score
            </h2>
            <p
              style={{
                fontSize: "var(--dashboard-hero-paragraph-size)",
                color: "var(--dashboard-hero-paragraph-color)",
              }}
              className="font-semibold"
            >
              {data?.weeklyConsistency}%
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            style={{ background: "var(--card-color-1)" }}
            className="p-4 rounded-2xl"
          >
            <h2
              style={{
                fontSize: "var(--dashboard-hero-subheading-size)",
                color: "var(--dashboard-hero-heading-color)",
              }}
              className="font-bold"
            >
              Focus Efficiency Score
            </h2>
            <p
              style={{
                fontSize: "var(--dashboard-hero-paragraph-size)",
                color: "var(--dashboard-hero-paragraph-color)",
              }}
              className="font-semibold"
            >
              {data?.focusEfficiency}%
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
