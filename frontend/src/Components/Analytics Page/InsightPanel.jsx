import React, { useEffect, useState } from "react";
import { getAnalytics } from "../../api/auth";

export default function InsightPanel() {
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
        INTELLIGENCE INSIGHTS PANEL
      </h1>

        {/* intelligence insights */}
      <div
        style={{ background: "var(--recommendation-card-background)" }}
        className="p-6 rounded-2xl"
      >
        {data?.insights?.insights.map((ele, i) => {
          return (
            <div key={i}>
              <p
                style={{
                  background: "var(--card-color-1)",
                  fontSize: "var(--dashboard-hero-paragraph-size)",
                  color: "var(--dashboard-hero-paragraph-color)",
                }}
                className="p-1 rounded-2xl text-center font-bold my-4"
              >
                {ele}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
