import React, { useEffect, useState } from "react";
import { getDashboard } from "../../api/auth";

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
      className="p-10 px-40"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-10 font-bold"
      >
        SMART RECOMMENDATIONS PANEL
      </h1>

      <div
        style={{ background: "var(--recommendation-card-background)" }}
        className="p-4 rounded-2xl"
      >
        {data?.map((elem, i) => {
          return (
            <div
              key={i}
              style={{
                background: "var(--design-engine-background)",
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--dashboard-hero-paragraph-size)",
              }}
              className="m-2 rounded-2xl p-2 text-center font-semibold"
            >
              <p>{elem}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
