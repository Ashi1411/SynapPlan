import React from "react";
import insights from "../../images/demo page/insights.png"
import weeklySummary from "../../images/demo page/weekly_summary.png"


export default function SmartRecommendation() {

  return (
    <div
      style={{ background: "var(--card-color-2)" }}
      className="p-4 md:p-8 lg:p-10"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center p-4 font-bold"
      >
        Smart Recommendations Showcase
      </h1>

      <p
        style={{
          fontSize: "var(--dashboard-hero-paragraph-size)",
          color: "var(--dashboard-hero-paragraph-color)",
        }}
        className="font-semibold px-4 md:px-10 pb-10 md:pb-20 text-center"
      >
        Smart insights that help you study better, avoid burnout, and stay consistently productive.
      </p>

      <div className="mx-0 md:mx-16">
        <img src={insights} alt="session timer view" style={{borderColor: "var(--navbar-logo-color)"}} className="border-2 md:border-4 mb-14 rounded-3xl"/>
      </div>

      <div className="mx-0 md:mx-16">
        <img src={weeklySummary} alt="session timer view" style={{borderColor: "var(--navbar-logo-color)"}} className="border-2 md:border-4 mb-14 rounded-3xl"/>
      </div>

      
      
    </div>
  );
}
