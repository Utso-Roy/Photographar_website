"use client";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of photography do you offer?",
      answer:
        "I specialize in wedding, portrait, event, and product photography. Each session is tailored to capture unique moments.",
    },
    {
      question: "Do you travel for photoshoots?",
      answer:
        "Yes! I am available for destination shoots and travel anywhere required. Extra charges may apply depending on location.",
    },
    {
      question: "How do I book a session?",
      answer:
        "You can book a session by filling out the contact form or reaching out via email/phone. A deposit is required to secure your booking.",
    },
    {
      question: "Will I receive edited photos?",
      answer:
        "Yes, all delivered photos are professionally edited for the best quality and style.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 ">
      <div >
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#7e5e12] rounded-xl p-4 transition-all duration-300 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <AiOutlineMinus className="w-5 h-5" />
                ) : (
                  <AiOutlinePlus className="w-5 h-5" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
