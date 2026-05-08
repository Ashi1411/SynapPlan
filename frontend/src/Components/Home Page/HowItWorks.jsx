import React from "react";
import image1 from "../../images/home page/home_page_how_it_works_1.png";
import image2 from "../../images/home page/home_page_how_it_works_2.png";
import image3 from "../../images/home page/home_page_how_it_works_3.png";
import image4 from "../../images/home page/home_page_how_it_works_4.png";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: "var(--how-it-works-color)" }}>
      <motion.h1
      {...fadeUp}
                transition={{ delay: 0.1 }}
        style={{
          color: "var(--section-heading-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="pt-16 px-4 md:px-10 text-center flex flex-col justify-center items-center font-bold"
      >
        How It Works?
      </motion.h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] mx-auto py-10"
      {...fadeUp}
                transition={{ delay: 0.3 }}>
        {/* card - 1 */}
        <div
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex flex-col items-center bg-cyan-100 min-h-[250px] md:min-h-[300px] my-10"
        >
          {/* number icon */}
          <div
            style={{
              background: "var(--number-color)",
              fontSize: "var(--how-it-works-number-size)",
              color: "var(--how-it-works-number-color)",
            }}
            className="rounded-full flex flex-col items-center justify-center p-1 aspect-[1] font-bold -translate-y-1/2"
          >
            1
          </div>

          {/* content of card */}
          <div className="flex flex-col justify-center items-center p-2">
            <h2
              style={{
                color: "var(--section-subheading-color)",
                fontSize: "var(--how-it-works-subheading-size)",
              }}
              className="font-bold"
            >
              Enter Subjects
            </h2>
            <p
              style={{
                color: "var(--section-paragraph-color)",
                fontSize: "var(--how-it-works-paragraph-size)",
              }}
              className="text-center font-bold"
            >
              Add subjects, exam dates, and study availability.
            </p>
          </div>
        </div>

        {/* card - 2 */}
        <div
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex flex-col items-center bg-cyan-100 min-h-[250px] md:min-h-[300px] my-10"
        >
          {/* number icon */}
          <div
            style={{
              background: "var(--number-color)",
              fontSize: "var(--how-it-works-number-size)",
              color: "var(--how-it-works-number-color)",
            }}
            className="rounded-full flex flex-col items-center justify-center p-1 aspect-[1] font-bold -translate-y-1/2"
          >
            2
          </div>

          {/* content of card */}
          <div className="flex flex-col justify-center items-center p-2">
            <h2
              style={{
                color: "var(--section-subheading-color)",
                fontSize: "var(--how-it-works-subheading-size)",
              }}
              className="font-bold"
            >
              Track Sessions
            </h2>
            <p
              style={{
                color: "var(--section-paragraph-color)",
                fontSize: "var(--how-it-works-paragraph-size)",
              }}
              className="text-center font-bold"
            >
              Use focus mode while studying and your activity is recorded.
            </p>
          </div>
        </div>

        {/* card - 3 */}
        <div
          style={{
            backgroundImage: `url(${image3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex flex-col items-center bg-cyan-100 min-h-[250px] md:min-h-[300px] my-10"
        >
          {/* number icon */}
          <div
            style={{
              background: "var(--number-color)",
              fontSize: "var(--how-it-works-number-size)",
              color: "var(--how-it-works-number-color)",
            }}
            className="rounded-full flex flex-col items-center justify-center p-1 aspect-[1] font-bold -translate-y-1/2"
          >
            3
          </div>

          {/* content of card */}
          <div className="flex flex-col justify-center items-center p-2">
            <h2
              style={{
                color: "var(--section-subheading-color)",
                fontSize: "var(--how-it-works-subheading-size)",
              }}
              className="font-bold"
            >
              Behavior Analysis
            </h2>
            <p
              style={{
                color: "var(--section-paragraph-color)",
                fontSize: "var(--how-it-works-paragraph-size)",
              }}
              className="text-center font-bold"
            >
              Productivity trends and fatigue levels are evaluated.
            </p>
          </div>
        </div>

        {/* card - 4 */}
        <div
          style={{
            backgroundImage: `url(${image4})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex flex-col items-center bg-cyan-100 min-h-[250px] md:min-h-[300px] my-10"
        >
          {/* number icon */}
          <div
            style={{
              background: "var(--number-color)",
              fontSize: "var(--how-it-works-number-size)",
              color: "var(--how-it-works-number-color)",
            }}
            className="rounded-full flex flex-col items-center justify-center p-1 aspect-[1] font-bold -translate-y-1/2"
          >
            4
          </div>

          {/* content of card */}
          <div className="flex flex-col justify-center items-center p-2">
            <h2
              style={{
                color: "var(--section-subheading-color)",
                fontSize: "var(--how-it-works-subheading-size)",
              }}
              className="font-bold"
            >
              Adaptive Plan
            </h2>
            <p
              style={{
                color: "var(--section-paragraph-color)",
                fontSize: "var(--how-it-works-paragraph-size)",
              }}
              className="text-center font-bold"
            >
              Your planner adjusts automatically for the next day.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
