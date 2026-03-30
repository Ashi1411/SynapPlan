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
    <div style={{background: "var(--card-color-2)"}} className="mt-14">
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
        <div className="mx-80">
          <ul className="flex justify-between">
            {data?.days?.map((ele, i) => {
              return (
                <li key={i}>
                  <p
                    className={`cursor-pointer ${day === ele.label ? "text-[#FFDE59]" : ""}`}
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
      <div className="grid grid-cols-2 gap-20 mb-20 p-10">
        {/* cards */}
        {data?.weeklySessions?.[day]?.map((elem, i) => {
          return(
            <div
              style={{ background: "var(--how-it-works-color)" }}
              className="rounded-2xl"
              key={i}
            >
              <h2
                style={{
                  color: "var(--section-subheading-color)",
                  fontSize: "var(--feature-heading-size)",
                }}
                className="text-center m-3 font-semibold"
              >
                {elem.subjectId.subjectName} 
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
                  Duration : {elem.duration} min
                </p>

                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--feature-paragraph-size)",
                  }}
                  className="font-semibold m-1"
                >
                  Duration Completed : {elem.durationCompleted} min
                </p>

                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--feature-paragraph-size)",
                  }}
                  className="font-semibold m-1"
                >
                    Intensity : {elem.subjectId.intensity}
                </p>

                <div
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--feature-paragraph-size)",
                  }}
                  className="font-semibold m-2 mt-4"
                >
                    Topics : {elem.topics?.map((ele, idx) => {
                      return(
                        <div key={idx}>{ele}</div>
                      )
                    })}
                </div>

                <button
                onClick={() => navigate(`/session/${elem._id._id || elem._id}`)}
                style={{
                  fontSize: "var(--dashboard-today-plan-button-size)",
                  color: "var(--hero-button-color)",
                  background: "var(--how-it-works-color)" 
                }}
                className="px-10 py-1 rounded-2xl m-2 font-bold"
              >
                Start Session
              </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* add subject button */}
      <button
        style={{
          fontSize: "var(--dashboard-today-plan-button-size)",
          color: "var(--day-bar-color)",
          background: "var(--day-bar-background)",
        }}
        className="px-10 py-1 rounded-2xl m-2 font-bold"
      >
        + Add Subject
      </button>
    </div>
  );
}
