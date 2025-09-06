"use client";
import React from "react";
import Image from "next/image";
import { FaPlane } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function TravelPortfolio() {
  const travels = [
    {
      id: 1,
      title: "Sunset at Santorini",
      location: "Greece",
      image:
        "https://images.unsplash.com/photo-1656677476420-7159cac2366a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Mountains in Switzerland",
      location: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Tokyo City Lights",
      location: "Japan",
      image:
        "https://images.unsplash.com/photo-1493514901090-977e25adc0ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Safari Adventure",
      location: "Kenya",
      image:
        "https://images.unsplash.com/photo-1602410141957-ee70b4739066?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Paris Eiffel Tower",
      location: "France",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Beach Paradise",
      location: "Maldives",
      image:
        "https://images.unsplash.com/photo-1619045789769-3c9dfc5fe199?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Desert Dunes",
      location: "Morocco",
      image:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Northern Lights",
      location: "Iceland",
      image:
        "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FaPlane className="text-5xl text-indigo-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Travel <span className="text-indigo-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore breathtaking destinations from around the world through our
            curated travel gallery.
          </p>
        </div>

        {/* Swiper Coverflow Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {travels.map((travel) => (
            <SwiperSlide key={travel.id}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
                <Image
                  src={travel.image}
                  alt={travel.title}
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 background bg-opacity-60 p-4">
                  <h3 className="text-lg font-bold text-white">
                    {travel.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{travel.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
