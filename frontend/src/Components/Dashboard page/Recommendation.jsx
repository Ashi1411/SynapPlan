import React, { useEffect, useState } from "react";
import { getDashboard } from "../../api/auth";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function Recommendation() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await getDashboard();
      setData(res.data.recommendations);
    }

    fetchDetails();
  }, []);

  return (
    <div
      style={{ background: "var(--design-engine-background)" }}
      className="py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <motion.h1
      {...fadeUp}
                transition={{ delay: 0.1 }}
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-6 md:pt-10 px-2 sm:px-4 font-bold"
      >
        SMART RECOMMENDATIONS PANEL
      </motion.h1>

      <div
        style={{ background: "var(--recommendation-card-background)" }}
        className="p-3 sm:p-4 md:p-6 max-w-4xl mx-auto rounded-2xl"
      >
        {data?.map((elem, i) => {
          return (
            <motion.div 
            {...fadeUp}
                      transition={{ delay: 0.3 }}
              key={i}
              style={{
                background: "var(--design-engine-background)",
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--dashboard-hero-paragraph-size)",
              }}
              className="p-1 rounded-2xl text-center font-semibold my-4"
            >
              <p>{elem}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
