"use client";
import React from "react";
import { FiBriefcase, FiClock, FiAward, FiUsers } from "react-icons/fi";
import CountUp from "react-countup";
import  Container from '../../Container/page';

export default function Experience() {
  const experiences = [
    { icon: <FiClock className="text-5xl text-amber-400" />, title: 'Years in Photography', value: 6, desc: 'Professional experience ' },
    { icon: <FiBriefcase className="text-5xl text-amber-400" />, title: 'Projects Completed', value: 180, desc: 'Diverse events and corporate shoots' },
    { icon: <FiUsers className="text-5xl text-amber-400" />, title: 'Clients Served', value: 120, desc: 'Satisfied clients worldwide' },
    { icon: <FiAward className="text-5xl text-amber-400" />, title: 'Awards & Recognition', value: 8, desc: 'Acknowledged for excellence' },
  ];

  return (
    <section className="py-20  min-h-screen text-neutral-100">
      <Container>
        

         <div className=" text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Experience & Expertise</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Years of dedication, countless projects, and a commitment to capturing the perfect moment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center  background rounded-3xl p-4 hover:scale-105 transform transition-transform duration-300"
          >
            <div className="mb-4">{exp.icon}</div>
            <div className="text-3xl font-bold mb-2">
              <CountUp end={exp.value} duration={2} separator="," />
            </div>
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-neutral-300">{exp.desc}</p>
          </div>
        ))}
      </div>
     </Container>
    </section>
  );
}
