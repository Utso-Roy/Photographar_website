"use client";
import React from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { FiAward, FiUsers, FiCamera, FiStar } from 'react-icons/fi';
import CountUp from 'react-countup';
import  Container from '../../Container/page';

export default function Achievement() {
  const achievements = [
    { icon: <FiAward className="text-3xl" />, title: 'Awards', value: 12, tag: 'Professional Recognition' },
    { icon: <FiUsers className="text-3xl" />, title: 'Clients', value: 120, tag: 'Happy Clients' },
    { icon: <FiCamera className="text-3xl" />, title: 'Projects', value: 180, tag: 'Events Covered' },
    { icon: <FiStar className="text-3xl" />, title: 'Experience', value: 6, tag: 'Years in Field' },
  ];

  return (
    <section className="px-5 py-18 text-neutral-100 min-h-screen">
      <Container>


        <div className=" text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Achievements & Milestones</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Celebrating moments of excellence and milestones in photography and creative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 rounded-2xl">
        {achievements.map((ach, idx) => (
          <Card key={idx} className="background rounded-3xl p-6 hover:bg-neutral-900 transition-all">
            <div className="flex items-center justify-center mb-2 text-neutral-100">
              {ach.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white text-center">{ach.title}</h3>
            <div className="text-3xl text-white font-bold text-center mb-2">
              <CountUp end={ach.value} duration={2} separator="," />
            </div>
            <Tag value={ach.tag} className="rounded-full px-3 py-1 mx-auto text-neutral-300 mt-2" />
          </Card>
        ))}
      </div>
      </Container>
    </section>
  );
}
