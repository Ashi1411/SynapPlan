import React, { useEffect, useState } from "react";
import { getAnalytics } from "../../api/auth";

export default function ProductivityTrend() {
  const [data, setData] = useState(null);
  const [weekly, setWeekly] = useState(true); //? true when the selected button is week

  useEffect(() => {
    async function fetchDetails() {
      const res = await getAnalytics();
      setData(res.data);
      console.log(res.data);
    }

    fetchDetails();
  }, []);

  return (
    <div style={{ background: "var(--card-color-1)" }} className="p-10">
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center p-4 font-bold"
      >
        PRODUCTIVITY TREND
      </h1>

      <p
        style={{
          fontSize: "var(--dashboard-hero-paragraph-size)",
          color: "var(--dashboard-hero-paragraph-color)",
        }}
        className="font-semibold px-10 pb-20"
      >
        Track how your focus and completion rates evolve over time.
      </p>

      {/* buttons */}
      <div className="text-center">
        <button
          style={{ fontSize: "var(--dashboard-hero-paragraph-size)" }}
          className={`py-1 px-4 rounded-lg font-bold ${weekly ? "activeBtn" : "nonActiveBtn"}`}
          onClick={() => setWeekly(true)}
        >
          Weekly View
        </button>
        <button
          style={{ fontSize: "var(--dashboard-hero-paragraph-size)" }}
          className={`py-1 px-4 rounded-lg font-bold ${!weekly ? "activeBtn" : "nonActiveBtn"}`}
          onClick={() => setWeekly(false)}
        >
          Monthly View
        </button>
      </div>

        {/* Weekly */}
      <div className={`grid grid-cols-2 gap-20 m-10 ${weekly ? "" : "hidden"}`}>
        {/* first graph */}
        <div style={{background: "var(--card-color-2)"}} className="rounded-2xl">
          <h2 style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold text-center m-1">
            Weekly Productivity
          </h2>
        </div>

        {/* second graph */}
        <div style={{background: "var(--card-color-2)"}} className="rounded-2xl">
          <h2 style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold text-center m-1">
            Weekly Focus Efficiency
          </h2>
        </div>
      </div>


        {/* Monthly */}
      <div className={`grid grid-cols-2 gap-20 m-10 ${!weekly ? "" : "hidden"}`}>
        {/* first graph */}
        <div style={{background: "var(--card-color-2)"}} className="rounded-2xl">
          <h2 style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold text-center m-1">
            Monthly Productivity
          </h2>
        </div>

        {/* second graph */}
        <div style={{background: "var(--card-color-2)"}} className="rounded-2xl">
          <h2 style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold text-center m-1">
            Monthly Focus Efficiency
          </h2>
        </div>
      </div>
    </div>
  );
}
