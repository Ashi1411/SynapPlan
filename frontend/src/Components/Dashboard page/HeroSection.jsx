import React, { useEffect, useState } from "react";
import { getDashboard } from "../../api/auth";

export default function HeroSection() {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    async function fetchDashboard() {
      const res = await getDashboard();
      setData(res.data);
      console.log(res.data);
    }

    fetchDashboard()
  }, []);



  return (
    <div style={{background: "var(--card-color-2 )"}} className="mt-12 grid grid-cols-[60%_40%] gap-6">
      {/* first grid */}
      <div
        style={{ width: "var(--width-of-section)" }}
        className="flex flex-col justify-center items-center mx-auto text-center h-[90vh]"
      >
        <h1
          style={{
            fontSize: "var(--dashboard-hero-heading-size)",
            color: "var(--dashboard-hero-heading-color)",
          }}
          className="font-bold"
        >
          Today's Study Mode
        </h1>
        <p
          style={{
            fontSize: "var(--dashboard-hero-subheading-size)",
            color: "var(--dashboard-hero-subheading-color)",
          }}
          className="font-bold mb-10"
        >
          🔵{data?.dayType}
        </p>
        <p
          style={{
            fontSize: "var(--dashboard-hero-paragraph-size)",
            color: "var(--dashboard-hero-paragraph-color",
          }}
          className="font-semibold"
        >
          Based on your recent productivity trends, today is {data?.dayType}.
        </p>
      </div>

      {/* second grid */}
      <div className="flex flex-col justify-center items-center">
        {/* image of battery */}
        <div></div>
          {/* battery percentage */}
        <div>
          <p style={{color: "var(--dashboard-hero-heading-color)", fontSize: "var(--dashboard-battery-percent-size)"}} className="font-bold">{data?.cognitive}% Cognitive Capacity Remaining</p>
        </div>
      </div>
    </div>
  );
}
