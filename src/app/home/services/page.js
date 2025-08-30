"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import weddingImg from "@/app/assets/wedding.jpg";
import birthdayImg from "@/app/assets/BirthdayPhotography.jpg";
import corporateImg from "@/app/assets/CorporateEvents.jpg";
import TravelPhotography from "@/app/assets/TravelPhotography.jpg";
import Image from "next/image";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Wedding Photography",
      description: "Capture your special day with stunning shots.",
      img: weddingImg,
    },
    {
      title: "Birthday Photography",
      description: "Make your birthdays unforgettable.",
      img: birthdayImg,
    },
    {
      title: "Corporate Events",
      description: "Professional coverage for corporate events.",
      img: corporateImg,
    },
    {
      title: "Travel Photography",
      description: "Bring your adventures to life through photography.",
      img: TravelPhotography,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="w-full mx-auto ">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 text-lg">
            Professional photography services for every occasion.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-900 rounded-lg border-2   border-[#7e5e12] shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="h-48 relative">
                <Image
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
