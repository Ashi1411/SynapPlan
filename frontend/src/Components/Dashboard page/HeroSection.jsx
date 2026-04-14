import React, { useEffect, useState } from "react";
import { getDashboard } from "../../api/auth";
import today_study_mode from "../../images/dashboard page/today_study_mode.png";
import excellent from "../../images/dashboard page/excellent.png";
import good from "../../images/dashboard page/good.png";
import moderate from "../../images/dashboard page/moderate.png";
import poor from "../../images/dashboard page/poor.png";

export default function HeroSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDashboard() {
      const res = await getDashboard();
      setData(res.data);
      console.log(res.data);
    }

    fetchDashboard();
  }, []);

  function getBatteryImage(value) {
    if (value >= 80) return excellent;
    if (value >= 60) return good;
    if (value >= 30) return moderate;
    return poor;
  }

  return (
    <div
      style={{ background: "var(--card-color-2)" }}
      className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 md:gap-6"
    >
      {/* first grid */}
      <div
        style={{
          backgroundImage: `url(${today_study_mode})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center mx-auto text-center min-h-[40vh] sm:min-h-[50vh] md:h-[90vh] w-full max-w-2xl px-2 sm:px-4">
          <h1
            style={{
              fontSize: "var(--dashboard-hero-heading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold mb-4 md:mb-6"
          >
            Today's Study Mode
          </h1>
          <p
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-subheading-color)",
            }}
            className="font-bold mb-6 md:mb-10"
          >
            🔵{data?.dayType || "Loading..."}
          </p>
          <p
            style={{
              fontSize: "var(--dashboard-hero-paragraph-size)",
              color: "var(--dashboard-hero-paragraph-color)",
            }}
            className="font-bold"
          >
            Based on your recent productivity trends, today is {data?.dayType}.
          </p>
        </div>
      </div>

      {/* second grid */}
      <div className="flex flex-col justify-center items-center text-center px-4 min-h-[150px] md:min-h-0 gap-4">
        {/* image of battery */}
        <div>
          {data?.cognitive !== undefined && (
            <img
              src={getBatteryImage(data.cognitive)}
              alt="Battery Status"
              className="w-60 md:w-80 object-contain"
            />
          )}
        </div>
        {/* battery percentage */}
        <div>
          <p
            style={{
              color: "var(--dashboard-hero-heading-color)",
              fontSize: "var(--dashboard-battery-percent-size)",
            }}
            className="font-bold"
          >
            {data?.cognitive ?? "--"}% Cognitive Capacity Remaining
          </p>
        </div>
      </div>
    </div>
  );
}
