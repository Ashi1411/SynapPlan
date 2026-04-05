import React, { useState } from "react";
import { faqs } from "../../Data/faqs";
import "../../styles/global.css";

export default function Faq() {
  let [currentFaq, setCurrentFaq] = useState(faqs[0].id);

  let ques = faqs.map((items, i) => {
    let details = { items, currentFaq, setCurrentFaq };

    return <FaqItems details={details} key={i}></FaqItems>;
  });

  return (
    <div
      style={{ background: "var(--faq-section-color)" }}
      className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-12 md:py-20"
    >
      <h1
        style={{
          color: "var(--section-heading-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="font-bold text-center"
      >
        Frequently Asked Questions
      </h1>

      <div className="w-full mt-8">{ques}</div>
    </div>
  );
}

export function FaqItems({ details }) {
  let { items, currentFaq, setCurrentFaq } = details;

  return (
    <div className="mb-4">
      <h2
        style={{
          background: "var(--faq-question-background)",
          fontSize: "var(--faq-question-size)",
          color: "var(--faq-question-color)",
        }}
        className="p-3 sm:p-4 font-semibold rounded-lg cursor-pointer"
        onClick={() => setCurrentFaq(items.id)}
      >
        {items.question}
      </h2>
      <p
        className={`transition-all duration-300 ease-in-out ${
          currentFaq === items.id ? "activeAns" : "notActiveAns"
        }`}
      >
        {items.answer}
      </p>
    </div>
  );
}
