import React, { useEffect, useState } from "react";
import { getAnalytics } from "../../api/auth";

import { formatDuration } from "../../utils/formatDuration"; // to integrate with seconds based backend

import image from "../../images/sessions page/weekly_summary.png";

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
    <div
      style={{ background: "var(--card-color-2)" }}
      className="px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-6 sm:pt-10 px-2 font-bold"
      >
        WEEKLY SUMMARY
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-10">
        <div
          style={{ background: "var(--recommendation-card-background)" }}
          className="order-2 md:order-1 p-3 sm:p-4 md:p-6 rounded-2xl w-full"
        >
          <p
            style={{
              background: "var(--card-color-1)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="p-2 rounded-2xl text-center font-bold my-2 sm:my-3"
          >
            Total Study Hours: {formatDuration(data?.durationCompleted)}
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
        <div style={{backgroundImage: `url(${image})`}} className="
          order-1
          md:order-2
          flex
          items-center
          justify-center
          w-full
          min-h-[250px]
          sm:min-h-[300px]
          md:min-h-[400px]
          p-2
          bg-contain
          bg-center
          bg-no-repeat
          rounded-2xl
          overflow-hidden
        ">
        </div>
      </div>
    </div>
  );
}
