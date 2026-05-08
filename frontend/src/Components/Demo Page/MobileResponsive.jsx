import React, { useEffect, useState } from "react";
import dashboard from "../../images/demo page/mobile_dashboard.png";
import plannar from "../../images/demo page/mobile_plannar.png";
import timer from "../../images/demo page/mobile_timer.png";
import insights from "../../images/demo page/mobile_insights.png";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function MobileResponsive() {
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
        Mobile Responsive Preview
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
        From desktop dashboards to mobile focus sessions — productivity follows
        you everywhere.
      </motion.p>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 sm:grid-cols-2 md:gap-10 sm:gap-6">
        <motion.div className="mx-auto" {...fadeUp} transition={{ delay: 0.5 }}>
          <img
            src={dashboard}
            alt="session timer view"
            style={{ borderColor: "var(--navbar-logo-color)" }}
            className="border-4 mb-14 rounded-3xl"
          />
        </motion.div>

        <motion.div className="mx-auto" {...fadeUp} transition={{ delay: 0.5 }}>
          <img
            src={plannar}
            alt="session timer view"
            style={{ borderColor: "var(--navbar-logo-color)" }}
            className="border-4 mb-14 rounded-3xl"
          />
        </motion.div>

        <motion.div className="mx-auto" {...fadeUp} transition={{ delay: 0.5 }}>
          <img
            src={timer}
            alt="session timer view"
            style={{ borderColor: "var(--navbar-logo-color)" }}
            className="border-4 mb-14 rounded-3xl"
          />
        </motion.div>

        <motion.div className="mx-auto" {...fadeUp} transition={{ delay: 0.5 }}>
          <img
            src={insights}
            alt="session timer view"
            style={{ borderColor: "var(--navbar-logo-color)" }}
            className="border-4 mb-14 rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
