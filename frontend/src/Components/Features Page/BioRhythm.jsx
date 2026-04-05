import React from "react";
import bio_rhythm from "../../images/feature page/bio_rhythm.png";

export default function BioRhythm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[180vh] md:h-[90vh]">
      {/* image */}
      <div style={{
                backgroundImage: `url(${bio_rhythm})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="flex flex-col justify-center p-6 md:p-10 min-h-[90vh] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"></div>

      {/* content */}
      <div
        style={{ background: "var(--card-color-1)" }}
        className="flex flex-col justify-center p-20 h-[90vh]"
      >
        <h1
          style={{
            color: "var(--section-heading-color)",
            fontSize: "var(--section-heading-size)",
          }}
          className="font-bold text-center"
        >
          Bio-Rhythm Detection
        </h1>
        <p
          style={{
            color: "var(--section-subheading-color)",
            fontSize: "var(--section-subheading-size)",
          }}
          className="font-bold text-center mb-4"
        >
          Study When You're Naturally Most Productive
        </p>
        <p
          style={{
            color: "var(--section-paragraph-color)",
            fontSize: "var(--section-paragraph-size)",
          }}
          className="font-semibold text-center"
        >
          The system analyzes your session start times, completion rates, and
          focus duration to identify your peak productivity hours. Once
          detected, it automatically schedules difficult subjects during those
          high-performance periods.
        </p>
      </div>
    </div>
  );
}
