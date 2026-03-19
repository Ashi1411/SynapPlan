import React, { useEffect, useState } from "react";
import { getAnalytics } from "../../api/auth";

export default function HeroSection() {
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
    <div style={{ background: "var(--card-color-2)" }} className="mt-12 p-10" >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-10 font-bold m-10"
      >
        OVERVIEW STATS
      </h1>

      <div className="grid grid-cols-2 gap-10 m-20">
        <div
          style={{ background: "var(--card-color-1)" }}
          className="p-4 rounded-2xl"
        >
          <h2
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold"
          >
            Total Study Hours (This Week)
          </h2>
          <p
            style={{
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="font-semibold"
          >
            {data?.durationCompleted} min
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-1)" }}
          className="p-4 rounded-2xl"
        >
          <h2
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold"
          >
            Average Completion Rate
          </h2>
          <p
            style={{
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="font-semibold"
          >
            {data?.completionRate}%
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-1)" }}
          className="p-4 rounded-2xl"
        >
          <h2
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold"
          >
            Consistency Score
          </h2>
          <p
            style={{
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="font-semibold"
          >
            {data?.weeklyConsistency}%
          </p>
        </div>

        <div
          style={{ background: "var(--card-color-1)" }}
          className="p-4 rounded-2xl"
        >
          <h2
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold"
          >
            Focus Efficiency Score
          </h2>
          <p
            style={{
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="font-semibold"
          >
            {data?.focusEfficiency}%
          </p>
        </div>
      </div>
    </div>
  );
}
