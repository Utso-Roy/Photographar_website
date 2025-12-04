"use client";
import React from "react";
import { FiBriefcase, FiClock, FiAward, FiUsers } from "react-icons/fi";
import CountUp from "react-countup";
import Container from '../../Container/page';

export default function Experience() {
  const experiences = [
    { 
      icon: <FiClock className="text-4xl md:text-5xl text-amber-400" />, 
      title: 'Years in Photography', 
      value: 6, 
      suffix: '+',
      desc: 'Professional experience' 
    },
    { 
      icon: <FiBriefcase className="text-4xl md:text-5xl text-amber-400" />, 
      title: 'Projects Completed', 
      value: 180, 
      suffix: '+',
      desc: 'Diverse events and corporate shoots' 
    },
    { 
      icon: <FiUsers className="text-4xl md:text-5xl text-amber-400" />, 
      title: 'Clients Served', 
      value: 120, 
      suffix: '+',
      desc: 'Satisfied clients worldwide' 
    },
    { 
      icon: <FiAward className="text-4xl md:text-5xl text-amber-400" />, 
      title: 'Awards & Recognition', 
      value: 8, 
      suffix: '',
      desc: 'Acknowledged for excellence' 
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-neutral-100">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Experience & Expertise
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
            Years of dedication, countless projects, and a commitment to capturing the perfect moment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 ">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20 transform transition-all duration-300 border border-gray-700 hover:border-amber-400/50"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:to-transparent rounded-2xl md:rounded-3xl transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex justify-center items-center md:mb-6 transform  group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-amber-400">
                  <CountUp 
                    end={exp.value} 
                    duration={2.5} 
                    separator="," 
                    suffix={exp.suffix}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">
                  {exp.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                  {exp.desc}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}