import React, { useEffect, useState } from "react";
import { getPlanner } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function PlannerCard() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [day, setDay] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await getPlanner();
      setData(res.data);
      setDay(res.data.todayDay);
      console.log(res.data);
    }

    fetchDetails();
  }, []);

  return (
    <div style={{ background: "var(--card-color-2)" }} className="mt-14 min-h-screen">
      {/* date bar */}
      <div
        style={{
          background: "var(--date-bar-background)",
          fontSize: "var(--date-bar-size)",
          color: "var(--dashboard-hero-heading-color)",
        }}
        className="text-center p-2 font-bold"
      >
        <p>Mar 18 - Mar 24</p>
      </div>

      {/* Day bar */}
      <div
        style={{
          background: "var(--day-bar-background)",
          fontSize: "var(--day-bar-size)",
          color: "var(--day-bar-color)",
        }}
        className="text-center p-2 font-bold"
      >
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <ul className="flex justify-between flex-wrap gap-2 sm:gap-4">
            {data?.days?.map((ele, i) => {
              return (
                <li key={i}>
                  <p
                    className={`cursor-pointer px-2 sm:px-3 py-1 rounded-lg ${
              day === ele.label ? "text-[#FFDE59]" : ""
            }`}
                    onClick={() => setDay(ele.label)}
                  >
                    {ele.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* today's info */}
      <div className="m-2 p-1">
        <p
          style={{
            color: "var(--dashboard-hero-subheading-color)",
            fontSize: "var(--today-details-size)",
          }}
          className="font-bold"
        >
          {data?.todayDay?.toUpperCase()}
        </p>
        <p
          style={{
            color: "var(--dashboard-hero-subheading-color)",
            fontSize: "var(--today-details-size)",
          }}
          className="font-bold"
        >
          {new Date().toLocaleDateString()}
        </p>
        <p
          style={{
            color: "var(--dashboard-hero-subheading-color)",
            fontSize: "var(--today-details-size)",
          }}
          className="font-bold"
        >
          🔵 {data?.dayType}
        </p>
      </div>

      {/* progress bar */}
      <div className="m-2 p-1">
        <p
          style={{
            color: "var(--dashboard-hero-heading-color)",
            fontSize: "var(--dashboard-today-plan-button-size)",
          }}
          className="font-bold"
        >
          Today's Load: {data?.dailyLoad}%
        </p>
      </div>

      {/* Today's Plan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 px-2 sm:px-4 md:px-8">
        {/* cards */}
        {data?.weeklySessions?.[day]?.map((elem, i) => {
          return (
            <div
              style={{ background: "var(--how-it-works-color)" }}
              className="rounded-2xl h-full"
              key={i}
            >
              <h2
                style={{
                  color: "var(--section-subheading-color)",
                  fontSize: "var(--feature-heading-size)",
                }}
                className="text-center m-3 font-semibold"
              >
                {elem?.subjectId?.subjectName}
              </h2>
              <div
                style={{ background: "var(--decision-engine-paragraph)" }}
                className="rounded-2xl text-center p-2"
              >
                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--feature-paragraph-size)",
                  }}
                  className="font-semibold m-1"
                >
                  Duration : {elem?.duration} min
                </p>

                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--feature-paragraph-size)",
                  }}
                  className="font-semibold m-1"
                >
                  Duration Completed : {elem?.durationCompleted} min
                </p>

                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--feature-paragraph-size)",
                  }}
                  className="font-semibold m-1"
                >
                  Intensity : {elem?.subjectId?.intensity}
                </p>

                <div
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--feature-paragraph-size)",
                  }}
                  className="font-semibold m-2 mt-4"
                >
                  Topics :{" "}
                  {elem?.topics?.map((ele, idx) => {
                    return <div key={idx}>{ele}</div>;
                  })}
                </div>

                <button
                  onClick={() =>
                    navigate(`/session/${elem._id._id || elem._id}`)
                  }
                  style={{
                    fontSize: "var(--dashboard-today-plan-button-size)",
                    color: "var(--hero-button-color)",
                    background: "var(--how-it-works-color)",
                  }}
                  className="px-4 sm:px-6 py-1 w-full sm:w-auto rounded-2xl m-2 font-bold"
                >
                  Start Session
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
