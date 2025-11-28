"use client";
import React from "react";
import { FaCameraRetro, FaRegSmileBeam, FaMoneyCheckAlt } from "react-icons/fa";
import  Container from '../../Container/page';

export default function WhyChoseMySection() {
  const reasons = [
    {
      icon: <FaCameraRetro className="text-3xl " />,
      title: "Pro Experience",
      desc: "5+ years capturing weddings, portraits & events with creativity.",
    },
    {
      icon: <FaRegSmileBeam className="text-3xl " />,
      title: "Happy Clients",
      desc: "Hundreds of satisfied clients with lasting memories.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-3xl" />,
      title: "Affordable",
      desc: "Flexible packages without compromising on quality.",
    },
  ];

  return (
    <Container>
      

        <section className=" text-white py-12 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I capture stories with passion and precision. Here’s why people trust me.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee flex gap-5">
          {reasons.concat(reasons).map((item, i) => (
            <div
              key={i}
              className=" background cursor-pointer  rounded-2xl p-6 shadow-md min-w-[250px] flex-shrink-0 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused; 
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  </Container>
  );
}
