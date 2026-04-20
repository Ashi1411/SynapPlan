import React, { useEffect, useState } from "react";
import { getDashboard } from "../../api/auth";
import { useNavigate } from "react-router-dom";


export default function TodayPlan() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await getDashboard();
      setData(res.data.todaySessions);
    }

    fetchDetails();
  }, [])


  return (
    <div
      style={{ background: "var(--design-engine-background)" }}
      className="py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-10 font-bold"
      >
        TODAY'S PLAN
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 md:mb-20 mt-6 md:mt-10">
        {/* card - 1 */}
        {data?.map((elem, i) => {
          return(
            <div
              style={{ background: "var(--decision-engine-heading)" }}
              className="rounded-2xl"
              key={i}
            >
              <h2
                style={{
                  color: "var(--section-subheading-color)",
                  fontSize: "var(--feature-heading-size)",
                }}
                className="text-center m-2 sm:m-3  font-semibold"
              >
                {elem?.subjectId?.subjectName} 
              </h2>
              <div
                style={{ background: "var(--decision-engine-paragraph)" }}
                className="rounded-2xl text-center p-3 sm:p-4"
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

                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--feature-paragraph-size)",
                  }}
                  className="font-semibold m-2 mt-4"
                >
                    Topics : {elem?.topics?.map((ele, idx) => {
                      return(
                        <div key={idx}>{ele}</div>
                      )
                    })}
                </p>

                <button
                onClick={() => navigate(`/session/${elem._id}`)}
                style={{
                  fontSize: "var(--dashboard-today-plan-button-size)",
                  color: "var(--hero-button-color)",
                  background: "var(--decision-engine-heading)" 
                }}
                className="px-6 sm:px-8 md:px-10 py-1.5 rounded-2xl m-2 font-bold"
              >
                Start Session
              </button>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
  );
}
