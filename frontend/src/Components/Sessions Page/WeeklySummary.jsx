import React, { useEffect, useState } from "react";
import { getAnalytics } from "../../api/auth";

export default function WeeklySummary() {
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
    <div style={{ background: "var(--card-color-2)" }} className="p-10">
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-10 font-bold m-10"
      >
        WEEKLY SUMMARY
      </h1>

      <div className="grid grid-cols-2 gap-10 m-20">
        <div
          style={{ background: "var(--recommendation-card-background)" }}
          className="p-6 rounded-2xl"
        >
          <p
            style={{
              background: "var(--card-color-1)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="p-1 rounded-2xl text-center font-bold my-4"
          >
            Total Study Hours: {data?.durationCompleted} mins
          </p>
          <p
            style={{
              background: "var(--card-color-1)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="p-1 rounded-2xl text-center font-bold my-4"
          >
            Average Completion Rate: {data?.completionRate}%
          </p>
          <p
            style={{
              background: "var(--card-color-1)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="p-1 rounded-2xl text-center font-bold my-4"
          >
            Consistency Score: {data?.weeklyConsistency}%
          </p>
          {data?.insights?.insights?.map((ele, i) => {
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

        {/* image */}
        <div></div>
      </div>
    </div>
  );
}
