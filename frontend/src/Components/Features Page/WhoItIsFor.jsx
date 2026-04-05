import React from "react";
import image1 from "../../images/feature page/student.png";
import image2 from "../../images/feature page/exam_aspirants.png";
import image3 from "../../images/feature page/self_learners.png";
import image4 from "../../images/feature page/working_professional.png";

export default function WhoItIsFor() {
  return (
    <div
      style={{ background: "var(--who-it-is-for-background)" }}
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-20"
    >
      <h1
        style={{
          color: "var(--hero-paragraph-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="text-center mb-10 font-bold"
      >
        WHO IT'S FOR
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Students */}
        <div
          style={{ background: "var(--who-card-color-1)" }}
          className="grid grid-cols-[60%_40%] p-4 rounded-2xl order-1 transition-all duration-300 ease-in-out 
  hover:scale-[1.03] hover:shadow-xl"
        >
          {/* content */}
          <div>
            <h2
              style={{
                color: "var(--hero-heading-color)",
                fontSize: "var(--feature-heading-size)",
              }}
              className="font-bold mb-2"
            >
              Students
            </h2>
            <p
              style={{
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Manage multiple subjects and deadlines with adaptive planning.
            </p>
          </div>

          {/* image */}
          <div className="flex items-end justify-end relative">
            <img
              src={image1}
              alt="student"
              className="h-32 sm:h-36 md:h-40 lg:h-60 object-contain"
            />
          </div>
        </div>

        {/* Exam Aspirants */}
        <div
          style={{ background: "var(--who-card-color-2)" }}
          className="grid grid-cols-[60%_40%] p-4 rounded-2xl order-2 transition-all duration-300 ease-in-out 
  hover:scale-[1.03] hover:shadow-xl"
        >
          {/* content */}
          <div>
            <h2
              style={{
                color: "var(--hero-heading-color)",
                fontSize: "var(--feature-heading-size)",
              }}
              className="font-bold mb-2"
            >
              Exam Aspirants
            </h2>
            <p
              style={{
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Maintain consistency during long preparation cycles.
            </p>
          </div>

          {/* image */}
          <div className="flex items-end justify-end relative">
            <img
              src={image2}
              alt="student"
              className="h-32 sm:h-36 md:h-40 lg:h-60 object-contain"
            />
          </div>
        </div>

        {/* Self Learners */}
        <div
          style={{ background: "var(--who-card-color-2)" }}
          className="grid grid-cols-[60%_40%] p-4 rounded-2xl order-4 md:order-3 transition-all duration-300 ease-in-out 
  hover:scale-[1.03] hover:shadow-xl"
        >
          {/* content */}
          <div>
            <h2
              style={{
                color: "var(--hero-heading-color)",
                fontSize: "var(--feature-heading-size)",
              }}
              className="font-bold mb-2"
            >
              Self Learners
            </h2>
            <p
              style={{
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Stay structured while learning independently.
            </p>
          </div>

          {/* image */}
          <div className="flex items-end justify-end relative">
            <img
              src={image3}
              alt="student"
              className="h-32 sm:h-36 md:h-40 lg:h-60 object-contain"
            />
          </div>
        </div>

        {/* Working Professionals */}
        <div
          style={{ background: "var(--who-card-color-1)" }}
          className="grid grid-cols-[60%_40%] p-4 rounded-2xl order-3 md:order-4 transition-all duration-300 ease-in-out 
  hover:scale-[1.03] hover:shadow-xl"
        >
          {/* content */}
          <div>
            <h2
              style={{
                color: "var(--hero-heading-color)",
                fontSize: "var(--feature-heading-size)",
              }}
              className="font-bold mb-2"
            >
              Working Professionals
            </h2>
            <p
              style={{
                color: "var(--hero-paragraph-color)",
                fontSize: "var(--feature-paragraph-size)",
              }}
              className="font-semibold"
            >
              Balance learning with daily responsibilities.
            </p>
          </div>

          {/* image */}
          <div className="flex items-end justify-end relative">
            <img
              src={image4}
              alt="student"
              className="h-32 sm:h-36 md:h-40 lg:h-60 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
