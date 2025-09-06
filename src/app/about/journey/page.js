"use client";
import React from "react";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";
import {
  FiCamera,
  FiClock,
  FiMapPin,
  FiAward,
  FiUsers,
  FiHeart,
  FiCheck,
} from "react-icons/fi";
import CountUp from "react-countup";

export default function Journey() {
  const stats = [
    {
      label: "Years",
      value: "6+",
      icon: <FiClock className="text-xl" />,
      hint: "In the field",
    },
    {
      label: "Events",
      value: "180+",
      icon: <FiMapPin className="text-xl" />,
      hint: "Covered worldwide",
    },
    {
      label: "Clients",
      value: "120+",
      icon: <FiUsers className="text-xl" />,
      hint: "Happy partners",
    },
    {
      label: "Awards",
      value: "08",
      icon: <FiAward className="text-xl" />,
      hint: "Recognitions",
    },
  ];

  const Values = [
    {
      icon: <FiHeart className="text-2xl" />,
      title: "Human First",
      desc: "Real moments, honest emotions, respectful storytelling.",
    },
    {
      icon: <FiCamera className="text-2xl" />,
      title: "Craft & Clarity",
      desc: "Clean frames, purposeful light, timeless edits.",
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "On Time, On Point",
      desc: "Punctual shoots, clear communication, reliable delivery.",
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "First Camera & First Gig",
      desc: "Started capturing moments with passion.",
      icon: <FiCamera />,
    },
    {
      year: "2021",
      title: "From Hobbyist to Professional",
      desc: "Delivered quality corporate and lifestyle.",
      icon: <FiCheck />,
    },
    {
      year: "2023",
      title: "Scaling Up the Studio",
      desc: "Built a team and streamlined workflow.",
      icon: <FiUsers />,
    },
    {
      year: "2025",
      title: "Creative Direction & Brand Work",
      desc: "Leading full creative projects for brands.",
      icon: <FiAward />,
    },
  ];

  return (
    <section className="px-5 py-18 min-h-screen  text-neutral-100">
      {/* Header */}
      <div>
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full background">
            <FiCamera />
            <span className="text-sm tracking-wide">
              Photographer’s Journey
            </span>
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            From Curiosity to Craft
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-neutral-300">
            A path shaped by light, moments, and the stories behind every frame.
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="cursor-target  cursor-pointer group rounded-2xl background  p-5  transition-colors"
              aria-label={`${s.label} stat`}
            >
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2 text-neutral-300">
                  {s.icon}
                  <span className="text-sm">{s.label}</span>
                </div>
                <Tag severity="secondary" value={s.hint} rounded></Tag>
              </div>
              <div className="mt-4 text-3xl font-bold">
                <CountUp end={parseInt(s.value)} duration={2} separator="," />
              </div>{" "}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-[1fr_380px] gap-5 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Milestones
            </h2>
            <ol className="relative border-s border-neutral-800 pl-6">
              {timeline.map((item, idx) => (
                <li key={idx} className="mb-8 ms-6 ">
                  <span className="absolute -start-3   flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 ring-4 ring-black text-neutral-300">
                    {item.icon}
                  </span>
                  <time className="text-sm text-neutral-400">{item.year}</time>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="mt-1 text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Side Card */}
          <aside className="rounded-2xl background  p-6">
            <div className="flex items-center gap-3">
              <Avatar
                image="https://randomuser.me/api/portraits/men/32.jpg"
                shape="circle"
                className="bg-neutral-800"
              />

              <div>
                <p className="text-sm text-neutral-400">Lead Photographer</p>
                <p className="font-semibold">Utso Chandro Roy</p>
              </div>
            </div>
            <Divider className="my-5 border-neutral-800" />
            <blockquote className="text-neutral-300 italic">
              “Every click is more than a photo — it’s a memory, a story, a
              moment held still.”
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                label="Book a Session"
                icon="pi pi-calendar"
                className="p-button-rounded cursor-target cursor-pointer my-btn  "
                style={{ border: "none", boxShadow: "none" }}
              />
              <Button
                label="View Portfolio"
                icon="pi pi-image"
                style={{ border: "none", boxShadow: "none" }}
                className="p-button-rounded cursor-target cursor-pointer  my-btn "
              />
            </div>
          </aside>
        </div>

        {/* Values */}

        <Divider />
        <div className="grid md:grid-cols-2 my-4  gap-4">
          {Values.map((v, i) => (
            <div key={i} className="rounded-xl background  p-6 ">
              <div className="flex items-center gap-2 text-neutral-300">
                {v.icon}
                <h3 className="font-semibold text-lg">{v.title}</h3>
              </div>
              <p className=" text-neutral-300">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
