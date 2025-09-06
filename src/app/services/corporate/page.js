"use client";
import React from "react";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Corporate() {
const corporateServices = [
  {
    id: 1,
    title: "Team Building",
    description: "Enhance team cohesion and collaboration with professional workshops.",
    image: "https://images.unsplash.com/photo-1690191864293-3fc9f1bd330b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Plan and organize corporate events, conferences, and seminars seamlessly.",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Workshops & Training",
    description: "Professional training sessions to boost employee skills and efficiency.",
    image: "https://images.unsplash.com/photo-1755548260148-60604bf6f588?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Networking Events",
    description: "Create valuable connections through corporate networking sessions.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Consulting Services",
    description: "Professional guidance to improve business strategy and operations.",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Product Launch Events",
    description: "Organize impactful product launches that leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Corporate Retreats",
    description: "Relaxing and productive retreats designed to enhance team performance.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 8,
    title: "Leadership Programs",
    description: "Develop strong leadership skills with structured corporate programs.",
    image: "https://images.unsplash.com/photo-1683200107031-e720a3fddf57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

  return (
    <section className="py-18 px-5 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header Banner */}
        <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
            alt="Corporate Banner"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
            <FaBuilding className="text-6xl text-indigo-400 mb-4" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Corporate <span className="text-indigo-400">Services</span>
            </h1>
            <p className="text-gray-200 mt-2 max-w-2xl">
              Professional corporate solutions for events, training, and team building.
            </p>
          </div>
        </div>

        {/* Swiper Corporate Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {corporateServices.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="background rounded-3xl shadow-2xl overflow-hidden cursor-pointer transition transform hover:scale-105">
                {/* Image */}
                <div className="relative h-72 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Title & Description below image */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
