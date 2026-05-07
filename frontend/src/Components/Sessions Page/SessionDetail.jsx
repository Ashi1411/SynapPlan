import React, { useEffect, useState } from "react";
import { getCompletedSessions } from "../../api/auth";
import { getSessionEfficiency } from "../../api/auth";

import { formatDuration } from "../../utils/formatDuration"; // to integrate with seconds based backend

import excellentIcon from "../../images/sessions page/excellent.png";
import goodIcon from "../../images/sessions page/good.png";
import averageIcon from "../../images/sessions page/average.png";
import poorIcon from "../../images/sessions page/poor.png";

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

  function getImage(label) {
    switch (label?.toLowerCase()) {
      case "excellent":
        return excellentIcon;
      case "good":
        return goodIcon;
      case "average":
      case "moderate":
        return averageIcon;
      case "poor":
        return poorIcon;
      default:
        return averageIcon;
    }
  }

  return (
    <div
      style={{ background: "var(--design-engine-background)" }}
      className="px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10"
    >
      <div className="max-w-6xl mx-auto">
        <h1
          style={{
            color: "var(--hero-paragraph-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="text-center pt-6 sm:pt-10 px-2 font-bold"
        >
          SESSION DETAILS PANEL
        </h1>

        <div>
          {analytics?.map((ele, i) => {
            return (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 my-6 sm:my-8"
                key={i}
              >
                {/* image */}
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={getImage(ele?.label)}
                    alt={ele?.label}
                    className="w-48 sm:w-54 md:w-60 object-contain"
                  />

                  <h2
                    style={{
                      color: "var(--section-heading-color)",
                      fontSize: "var(--dashboard-hero-subheading-size)",
                    }}
                    className="font-bold mt-2 text-center capitalize"
                  >
                    {ele?.label}
                  </h2>
                </div>

                <div
                  style={{
                    background: "var(--recommendation-card-background)",
                  }}
                  className="p-3 sm:p-4 md:p-6 rounded-2xl text-center"
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
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
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
                  </div>
                  <p
                    style={{
                      color: "var(--section-heading-color)",
                      fontSize: "var(--dashboard-hero-paragraph-size)",
                    }}
                    className="font-semibold"
                  >
                    <span className="font-bold">Duration:</span> {formatDuration(ele?.duration)}
                  </p>
                  <p
                    style={{
                      color: "var(--section-heading-color)",
                      fontSize: "var(--dashboard-hero-paragraph-size)",
                    }}
                    className="font-semibold"
                  >
                    <span className="font-bold">Duration Completed:</span>{" "}
                    {formatDuration(ele?.durationCompleted)}
                  </p>
                  <p
                    style={{
                      color: "var(--section-heading-color)",
                      fontSize: "var(--dashboard-hero-paragraph-size)",
                    }}
                    className="font-semibold"
                  >
                    <span className="font-bold">Break Duration:</span>{" "}
                    {formatDuration(ele?.breakDuration)}
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
                    {Number(ele?.efficiency || 0).toFixed(1)}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
