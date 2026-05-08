import React, { useEffect, useState } from "react";
import dashboard from "../../images/demo page/mobile_dashboard.png";
import plannar from "../../images/demo page/mobile_plannar.png";
import timer from "../../images/demo page/mobile_timer.png";
import insights from "../../images/demo page/mobile_insights.png";

export default function MobileResponsive() {
  return (
    <div
      style={{ background: "var(--card-color-1)" }}
      className="p-4 md:p-8 lg:p-10"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center p-4 font-bold"
      >
        Mobile Responsive Preview
      </h1>

      <p
        style={{
          fontSize: "var(--dashboard-hero-paragraph-size)",
          color: "var(--dashboard-hero-paragraph-color)",
        }}
        className="font-semibold px-4 md:px-10 pb-10 md:pb-20 text-center"
      >
        From desktop dashboards to mobile focus sessions — productivity follows
        you everywhere.
      </p>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 sm:grid-cols-2 md:gap-10 sm:gap-6">
        <div className="mx-auto">
          <img
            src={dashboard}
            alt="session timer view"
            style={{ borderColor: "var(--navbar-logo-color)" }}
            className="border-4 mb-14 rounded-3xl"
          />
        </div>

        <div className="mx-auto">
          <img
            src={plannar}
            alt="session timer view"
            style={{ borderColor: "var(--navbar-logo-color)" }}
            className="border-4 mb-14 rounded-3xl"
          />
        </div>

        <div className="mx-auto">
          <img
            src={timer}
            alt="session timer view"
            style={{ borderColor: "var(--navbar-logo-color)" }}
            className="border-4 mb-14 rounded-3xl"
          />
        </div>

        <div className="mx-auto">
          <img
            src={insights}
            alt="session timer view"
            style={{ borderColor: "var(--navbar-logo-color)" }}
            className="border-4 mb-14 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
