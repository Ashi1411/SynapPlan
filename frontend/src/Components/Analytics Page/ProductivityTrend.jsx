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
import { formatDuration } from "../../utils/formatDuration";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function ProductivityTrend() {
  const [data, setData] = useState(null);
  const [weekly, setWeekly] = useState(true); //? true when the selected button is week

  useEffect(() => {
    async function fetchDetails() {
      const res = await getAnalytics();
      setData(res.data);
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
        : Math.round((item.totalStudy || 0) / 60),
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
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />

          <XAxis dataKey="date" stroke="#555" tick={{ fontSize: 12 }} />
          <YAxis stroke="#555" tick={{ fontSize: 12 }} />

          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // shadow
            }}
            formatter={(value) =>
              unit === "min" ? formatDuration(value * 60) : `${value}%`
            }
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
  if (!data) return <p className="text-center p-10">Loading analytics...</p>;

  return (
    <div
      style={{ background: "var(--card-color-1)" }}
      className="p-4 md:p-8 lg:p-10"
    >
      <motion.h1
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center p-4 font-bold"
      >
        PRODUCTIVITY TREND
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: "var(--dashboard-hero-paragraph-size)",
          color: "var(--dashboard-hero-paragraph-color)",
        }}
        className="font-semibold px-4 md:px-10 pb-10 md:pb-20"
      >
        Track how your focus and completion rates evolve over time.
      </motion.p>

      {/* buttons */}
      <motion.div
        className="text-center flex flex-col sm:flex-row justify-center"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
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
      </motion.div>

      {/* Weekly */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 m-4 md:m-10 ${weekly ? "" : "hidden"}`}
      >
        {/* weekly productivity - first graph */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5 }}
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

          <div className="w-full h-[280px] p-3">
            <div className="w-full h-full bg-white rounded-xl p-2">
              {renderChart(weeklyProductivityData, "#4CAF50", "min")}
            </div>
          </div>
        </motion.div>

        {/* weekly focus efficiency - second graph */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5 }}
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

          <div className="w-full h-[280px] p-3">
            <div className="w-full h-full bg-white rounded-xl p-2">
              {renderChart(weeklyEfficiencyData, "#2196F3", "%")}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Monthly */}
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.5 }}
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

          <div className="w-full h-[280px] p-3">
            <div className="w-full h-full bg-white rounded-xl p-2">
              {renderChart(monthlyProductivityData, "#FF9800", "min")}
            </div>
          </div>
        </div>

        {/* second graph */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5 }}
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

          <div className="w-full h-[280px] p-3">
            <div className="w-full h-full bg-white rounded-xl p-2">
              {renderChart(monthlyEfficiencyData, "#9C27B0", "%")}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
