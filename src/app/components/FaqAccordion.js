"use client";

import React, { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrap">
      {items.map((item, idx) => (
        <div className="faq-item" key={idx}>
          <div className="faq-question" onClick={() => toggleFaq(idx)}>
            <span>{item.question}</span>
            <span className={`faq-toggle-icon ${openIndex === idx ? "open" : ""}`}>
              +
            </span>
          </div>
          <div className={`faq-answer-container ${openIndex === idx ? "open" : ""}`}>
            <div className="faq-answer">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
