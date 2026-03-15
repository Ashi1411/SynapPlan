import React, { useState } from "react";
import { getDashboard } from "../../api/auth";

export default function Performance() {
    const [data, setData] = useState(null);

    useState(() => {
        async function fetchDetails() {
            const res = await getDashboard();
            setData(res.data);
        }

        fetchDetails();
    }, [])


  return (
    <div style={{ background: "var(--card-color-2)" }}>
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-10 font-bold"
      >
        PERFORMANCE SNAPSHOT
      </h1>

      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-center">
          <div
            style={{ background: "var(--card-color-1)" }}
            className="mx-10 my-4 rounded-2xl h-[85%] aspect-square"
          >
            <p
              style={{
                background: "var(--card-color-1)",
                color: "var(--dashboard-hero-heading-color)",
                fontSize: "var(--dashboard-hero-subheading-size)",
              }}
              className="rounded-2xl p-2 font-bold text-center"
            >
              Weekly Productivity Graph
            </p>
            {/* image */}
            <div></div>
          </div>
        </div>
        <div>
          <p
            style={{
              color: "var(--dashboard-hero-subheading-color)",
              fontSize: "var(--dashboard-hero-subheading-size)",
            }}
            className="font-semibold text-center mt-8 mb-10"
          >
            {data?.weeklyConsistency}% Consistency This Week
          </p>

          <h2
            style={{
              color: "var(--dashboard-hero-subheading-color)",
              fontSize: "var(--dashboard-feature-subheading-size)",
            }}
            className="font-bold text-center m-4"
          >
            Upcoming Deadline Alert
          </h2>

          <div
            style={{
              background: "var(--card-color-1)",
              color: "var(--dashboard-hero-heading-color)",
              fontSize: "var(--dashboard-hero-paragraph-size)",
            }}
            className="m-4 mb-40 rounded-2xl p-2"
          >
            
            <div>
                {data?.upcomingDeadlines?.map((elem, i) => {
                    return(
                        <div key={i}>
                            <div style={{background: "var(--card-color-2)"}} className="m-2 p-2 rounded-2xl">
                                <p className="font-semibold">{elem?.subjectName}</p>
                                <p className="font-semibold">Exam Date: {new Date(elem?.examDate).toLocaleDateString()}</p>
                                <p className="font-semibold">Priority: {elem?.priority}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
