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
    <div
      style={{ background: "var(--card-color-2)" }}
      className="px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 min-h-screen"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-6 sm:pt-10 pb-2 font-bold px-2"
      >
        INTELLIGENCE INSIGHTS PANEL
      </h1>

      {/* intelligence insights */}
      <div
        style={{ background: "var(--recommendation-card-background)" }}
        className="p-3 sm:p-4 md:p-6 rounded-2xl max-w-4xl mx-auto"
      >
        {!data?.insights?.insights?.length && (
          <p className="text-center py-6 text-sm sm:text-base">
            No insights available yet 📊
          </p>
        )}

        {data?.insights?.insights?.map((ele, i) => {
          return (
            <div key={i}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
