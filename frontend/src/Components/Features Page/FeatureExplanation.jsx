import React from "react";
import { features } from "../../Data/explanation";

export default function FeatureExplanation() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4 sm:px-8 md:px-16 mb-20 md:mb-32 mt-20 md:-mt-20">
        {features.map((item, i) => {
          return (
            <div
              style={{ background: item.background }}
              className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl text-center"
            >
              <div
                style={{ background: "var(--feature-icons-background)" }}
                className="rounded-full p-3 sm:p-4 mt-4 mb-6"
              >
                {/* icon */}
                icon
              </div>
              <div className="text-center px-2 sm:px-4">
                <h1
                  style={{
                    fontSize: "var(--feature-heading-size)",
                    color: "var(--section-subheading-color)",
                  }}
                  className="font-bold"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
