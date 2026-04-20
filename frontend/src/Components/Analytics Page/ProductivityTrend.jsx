import React, { useEffect, useState } from "react";
import { getAnalytics } from "../../api/auth";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ProductivityTrend() {
  const [data, setData] = useState(null);
  const [weekly, setWeekly] = useState(true); //? true when the selected button is week

  useEffect(() => {
    async function fetchDetails() {
      const res = await getAnalytics();
      setData(res.data);
      console.log(res.data);
    }

    fetchDetails();
  }, []);

  //! for adding weekly and monthly charts
  const formatData = (arr, isEfficiency = false) => {
    if (!arr) return [];

    return arr.map((item) => ({
      date: new Date(item._id).toLocaleDateString("en-IN", {
        weekday: "short",
      }),
      value: isEfficiency
        ? Math.round((item.focusEfficiency || 0) * 100)
        : item.totalStudy || 0,
    }));
  };

  //? Weekly
  const weeklyProductivityData = formatData(data?.weeklyProductivityStudyTime);

  const weeklyEfficiencyData = formatData(data?.weeklyFocusEfficiency, true);

  //? Monthly
  const monthlyProductivityData = formatData(data?.monthlyProductiveStudyTime);

  const monthlyEfficiencyData = formatData(data?.monthlyFocusEfficiency, true);



  //! reusable chart
  const renderChart = (chartData, color, unit) => {
  if (!chartData.length)
    return <p className="text-center p-4">No data available</p>;

  return (
    <ResponsiveContainer width="100%" height={window.innerWidth < 640 ? 250 : 320}>
      <LineChart
        data={chartData}
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          padding: "10px",
        }}
      >
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
        
        <XAxis dataKey="date" stroke="#555" tick={{ fontSize: 12 }} />
        <YAxis stroke="#555" />

        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
          formatter={(value) => `${value} ${unit}`}
        />

        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={3}
          dot={{ r: 4 }}
          animationDuration={800}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

  //! loading state
  if (!data)
    return <p className="text-center p-10">Loading analytics...</p>;

  return (
    <div style={{ background: "var(--card-color-1)" }} className="p-4 md:p-8 lg:p-10">
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center p-4 font-bold"
      >
        PRODUCTIVITY TREND
      </h1>

      <p
        style={{
          fontSize: "var(--dashboard-hero-paragraph-size)",
          color: "var(--dashboard-hero-paragraph-color)",
        }}
        className="font-semibold px-4 md:px-10 pb-10 md:pb-20"
      >
        Track how your focus and completion rates evolve over time.
      </p>

      {/* buttons */}
      <div className="text-center flex flex-col sm:flex-row justify-center">
        <button
          style={{ fontSize: "var(--dashboard-hero-paragraph-size)" }}
          className={`py-1 px-4 rounded-lg font-bold ${weekly ? "activeBtn" : "nonActiveBtn"}`}
          onClick={() => setWeekly(true)}
        >
          Weekly View
        </button>
        <button
          style={{ fontSize: "var(--dashboard-hero-paragraph-size)" }}
          className={`py-1 px-4 rounded-lg font-bold ${!weekly ? "activeBtn" : "nonActiveBtn"}`}
          onClick={() => setWeekly(false)}
        >
          Monthly View
        </button>
      </div>

      {/* Weekly */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 m-4 md:m-10 ${weekly ? "" : "hidden"}`}>
        {/* weekly productivity - first graph */}
        <div
          style={{ background: "var(--card-color-2)" }}
          className="rounded-2xl p-4"
        >
          <h2
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold text-center m-2"
          >
            Weekly Productivity
          </h2>

          {renderChart(weeklyProductivityData, "#4CAF50", "min")}
        </div>

        {/* weekly focus efficiency - second graph */}
        <div
          style={{ background: "var(--card-color-2)" }}
          className="rounded-2xl p-4"
        >
          <h2
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold text-center m-2"
          >
            Weekly Focus Efficiency
          </h2>

          {renderChart(weeklyEfficiencyData, "#2196F3", "%")}
        </div>
      </div>

      {/* Monthly */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 m-4 md:m-10 ${!weekly ? "" : "hidden"}`}
      >
        {/* first graph */}
        <div
          style={{ background: "var(--card-color-2)" }}
          className="rounded-2xl p-4"
        >
          <h2
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold text-center m-2"
          >
            Monthly Productivity
          </h2>

          {renderChart(monthlyProductivityData, "#FF9800", "min")}
        </div>

        {/* second graph */}
        <div
          style={{ background: "var(--card-color-2)" }}
          className="rounded-2xl p-4"
        >
          <h2
            style={{
              fontSize: "var(--dashboard-hero-subheading-size)",
              color: "var(--dashboard-hero-heading-color)",
            }}
            className="font-bold text-center m-2"
          >
            Monthly Focus Efficiency
          </h2>

          {renderChart(monthlyEfficiencyData, "#9C27B0", "%")}
        </div>
      </div>
    </div>
  );
}
