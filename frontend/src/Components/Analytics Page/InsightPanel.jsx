import React, { useEffect, useState } from "react";
import { getAnalytics } from "../../api/auth";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function InsightPanel() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await getAnalytics();
      setData(res.data);
    }

    fetchDetails();
  }, []);

  return (
    <div
      style={{ background: "var(--card-color-2)" }}
      className="px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 min-h-screen"
    >
      <motion.h1
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-6 sm:pt-10 pb-2 font-bold px-2"
      >
        INTELLIGENCE INSIGHTS PANEL
      </motion.h1>

      {/* intelligence insights */}
      <div
        style={{ background: "var(--recommendation-card-background)" }}
        className="p-3 sm:p-4 md:p-6 rounded-2xl max-w-4xl mx-auto"
      >
        {!data?.insights?.insights?.length && (
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-center py-6 text-sm sm:text-base"
          >
            No study insights available yet 📊
          </motion.p>
        )}

        {data?.insights?.insights?.map((ele, i) => {
          return (
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} key={i}>
              <p
                style={{
                  background: "var(--card-color-2)",
                  fontSize: "var(--dashboard-hero-paragraph-size)",
                  color: "var(--dashboard-hero-paragraph-color)",
                }}
                className="p-1 rounded-2xl text-center font-semibold my-4"
              >
                {ele}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
