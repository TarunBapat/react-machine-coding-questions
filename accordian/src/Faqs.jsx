import { useState } from "react";
import Faq from "./Faq";
const faqs = [
  {
    index: 1,
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    index: 2,
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    index: 3,
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];
const Faqs = () => {
  return (
    <div>
      {faqs.map((item) => {
        return (
          <Faq
            items={item}
            key={item.index}
            isShown={isShown}
            setIsShown={setIsShown}
          />
        );
      })}
    </div>
  );
};

export default Faqs;
