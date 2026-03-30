import React, { useEffect, useState } from "react";
import { getCompletedSessions } from "../../api/auth";
import { getSessionEfficiency } from "../../api/auth";

export default function SessionDetail() {
  const [completedSessions, setCompletedSessions] = useState([]);
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const fetchCompleted = async () => {
      try {
        const res = await getCompletedSessions();
        setCompletedSessions(res.data.completedSessions);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCompleted();
  }, []);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const results = await Promise.all(
          completedSessions.map(async (sess) => {
            const res = await getSessionEfficiency(sess._id);

            return {
              ...sess,
              efficiency: res.data.efficiency,
              label: res.data.efficiencyLabel,
            };
          }),
        );

        setAnalytics(results);
        console.log(results);
      } catch (err) {
        console.log(err);
      }
    };

    if (completedSessions.length > 0) {
      fetchAnalytics();
    }
  }, [completedSessions]);

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
        SESSION DETAILS PANEL
      </h1>

      <div>
        {analytics?.map((ele, i) => {
          return (
            <div className="grid grid-cols-2 gap-10 m-10" key={i}>
              {/* image */}
              <div>
                <h2
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--dashboard-hero-subheading-size)",
                  }}
                  className="font-bold m-2 mt-4 text-center"
                >
                  {ele?.label}
                </h2>
              </div>

              <div
                style={{ background: "var(--recommendation-card-background)" }}
                className="p-4 px-10 rounded-2xl text-center"
              >
                <h2
                  style={{
                    color: "var(--dashboard-hero-heading-color)",
                    fontSize: "var(--dashboard-today-plan-button-size)",
                  }}
                  className="font-bold"
                >
                  {ele?.subjectId?.subjectName}
                </h2>
                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--dashboard-hero-paragraph-size)",
                  }}
                  className="font-bold"
                >
                  Topics:
                </p>
                {ele?.topics?.map((topic, i) => {
                  return (
                    <div key={i}>
                      <p
                        style={{
                          color: "var(--section-heading-color)",
                          fontSize: "var(--dashboard-hero-paragraph-size)",
                        }}
                        className="font-semibold"
                      >
                        {topic}
                      </p>
                    </div>
                  );
                })}
                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--dashboard-hero-paragraph-size)",
                  }}
                  className="font-semibold"
                >
                  <span className="font-bold">Duration:</span> {ele?.duration}
                </p>
                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--dashboard-hero-paragraph-size)",
                  }}
                  className="font-semibold"
                >
                  <span className="font-bold">Duration Completed:</span>{" "}
                  {ele?.durationCompleted}
                </p>
                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--dashboard-hero-paragraph-size)",
                  }}
                  className="font-semibold"
                >
                  <span className="font-bold">Break Duration:</span>{" "}
                  {ele?.breakDuration}
                </p>
                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--dashboard-hero-paragraph-size)",
                  }}
                  className="font-semibold"
                >
                  <span className="font-bold">Break Count:</span>{" "}
                  {ele?.breakCount}
                </p>
                <p
                  style={{
                    color: "var(--section-heading-color)",
                    fontSize: "var(--dashboard-hero-paragraph-size)",
                  }}
                  className="font-semibold"
                >
                  <span className="font-bold">Efficiency:</span>{" "}
                  {ele?.efficiency}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
