import React from "react";
import { features } from "../../Data/explanation";
import feature_1 from "../../images/feature page/feature_1.png";
import feature_2 from "../../images/feature page/feature_2.png";
import feature_3 from "../../images/feature page/feature_3.png";
import feature_4 from "../../images/feature page/feature_4.png";
import feature_5 from "../../images/feature page/feature_5.png";
import feature_6 from "../../images/feature page/feature_6.png";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function FeatureExplanation() {
  const imageMap = {
    feature_1,
    feature_2,
    feature_3,
    feature_4,
    feature_5,
    feature_6,
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4 sm:px-8 md:px-16 lg:px-24 mb-16 md:mb-24 mt-10 md:mt-20">
        {features.map((item, i) => {
          return (
            <motion.div
            {...fadeUp}
                      transition={{ delay: 0.1 }}
              key={i}
              style={{ background: item.background }}
              className="flex flex-col items-center justify-start p-6 sm:p-7 md:p-8 rounded-3xl text-center 
              transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div
                style={{ background: "var(--feature-icons-background)" }}
                className="rounded-full w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-4 md:mb-6"
              >
                {/* icon */}
                <img
                  src={imageMap[item.imageUrl]}
                  alt={item.heading}
                  className="w-18 sm:w-20 md:w-24 lg:w-28 h-auto object-contain 
                  transition-transform duration-300 hover:scale-110 aspect-1"
                />
              </div>

              <div className="px-1 sm:px-3">
                <h1
                  style={{
                    fontSize: "var(--feature-heading-size)",
                    color: "var(--section-subheading-color)",
                  }}
                  className="font-bold mb-2 md:mb-3"
                >
                  {" "}
                  {item.heading}{" "}
                </h1>
                <p
                  style={{
                    fontSize: "var(--feature-paragraph-size)",
                    color: "var(--section-paragraph-color)",
                  }}
                  className="font-semibold"
                >
                  {" "}
                  {item.paragraph}{" "}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
