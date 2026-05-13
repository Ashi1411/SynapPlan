import React, { useState } from "react";
import { faqs } from "../../Data/faqs";
import "../../styles/global.css";

import { AnimatePresence, motion } from "framer-motion";
import { fadeUp } from "../../animations";

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
      <motion.h1
        {...fadeUp}
        transition={{ delay: 0.1 }}
        style={{
          color: "var(--section-heading-color)",
          fontSize: "var(--section-heading-size)",
        }}
        className="font-bold text-center"
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="w-full mt-8">{ques}</div>
    </div>
  );
}

export function FaqItems({ details }) {
  let { items, currentFaq, setCurrentFaq } = details;

  return (
    <motion.div className="mb-4" {...fadeUp} transition={{ delay: 0.3 }}>
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
      <AnimatePresence>
        {currentFaq === items.id && (
          <motion.div
            initial={{
              opacity: 0,
              maxHeight: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              maxHeight: 200,
              y: 0,
            }}
            exit={{
              opacity: 0,
              maxHeight: 0,
              y: -10,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            style={{
              overflow: "hidden",
              background: "var(--faq-answer-background)",
              color: "var(--faq-answer-color)",
              fontWeight: 600,
              fontSize: "var(--faq-answer-size)",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              padding: "12px",
            }}
          >
            {items.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
