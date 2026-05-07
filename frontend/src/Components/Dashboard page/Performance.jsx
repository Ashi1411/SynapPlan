import React, { useEffect, useState } from "react";
import { getDashboard } from "../../api/auth";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { formatDuration } from "../../utils/formatDuration"; // to integrate with second based backend

export default function Performance() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const res = await getDashboard();
      setData(res.data);
    }

    fetchDetails();
  }, []);

  function fillWeekData(data) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const map = {};

    data.forEach((item) => {
      const d = new Date(item._id);
      const dayIndex = d.getDay() === 0 ? 6 : d.getDay() - 1;
      const day = days[dayIndex];
      map[day] = Math.round(item.totalStudy / 60);
    });

    return days.map((day) => ({
      day,
      minutes: map[day] || 0,
    }));
  }

  const chartData = fillWeekData(data?.weeklyProductivity || []);

  return (
    <div
      style={{ background: "var(--card-color-2)" }}
      className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center pt-10 font-bold"
      >
        PERFORMANCE SNAPSHOT
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="flex flex-col items-center justify-center">
          <div
            style={{ background: "var(--card-color-1)" }}
            className="rounded-2xl mx-2 sm:mx-4 md:mx-6 my-4 w-full max-w-md"
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
            <div className="w-full h-[280px] p-3">
              <div className="w-full h-full bg-white rounded-xl p-2">
                {chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="day" />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip
                        formatter={(value) => formatDuration(value * 60)}
                        contentStyle={{
                          borderRadius: "12px",
                          border: "2px solid #e5e7eb", // thicker border
                          boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // shadow
                          padding: "8px 12px",
                        }}
                        cursor={{
                          stroke: "var(--dashboard-hero-heading-color)",
                          strokeWidth: 1,
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="minutes"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-center mt-10">No data available</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p
            style={{
              color: "var(--dashboard-hero-subheading-color)",
              fontSize: "var(--dashboard-hero-subheading-size)",
            }}
            className="font-semibold text-center mt-4 sm:mt-6 md:mt-8 mb-6 md:mb-10"
          >
            {data?.weeklyConsistency}% Average Completion Rate This Week
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
            className="m-2 sm:m-4 mb-10 md:mb-40 rounded-2xl p-2"
          >
            <div>
              {data?.upcomingDeadlines?.map((elem, i) => {
                return (
                  <div key={i}>
                    <div
                      style={{ background: "var(--card-color-2)" }}
                      className="m-2 p-2 rounded-2xl"
                    >
                      <p className="font-semibold">{elem?.subjectName}</p>
                      <p className="font-semibold">
                        Exam Date:{" "}
                        {new Date(elem?.examDate).toLocaleDateString()}
                      </p>
                      <p className="font-semibold">
                        Priority: {elem?.priority}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
