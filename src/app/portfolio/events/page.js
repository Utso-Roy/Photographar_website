"use client";
import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
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

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Wedding Photography Session",
      date: "September 12, 2025",
      location: "Dhaka, Bangladesh",
      description:
        "Capturing timeless moments from the most beautiful weddings with a creative touch.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Street Photography Walk",
      date: "October 05, 2025",
      location: "Chattogram, Bangladesh",
      description:
        "Explore the city streets through the lens and learn candid photography skills.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "Nature & Wildlife Exhibition",
      date: "November 20, 2025",
      location: "Rajshahi, Bangladesh",
      description:
        "Showcasing the beauty of nature and wildlife through powerful photography.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Portrait Lighting Workshop",
      date: "December 15, 2025",
      location: "Sylhet, Bangladesh",
      description:
        "Master studio and natural lighting techniques for professional portrait photography.",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "Drone Photography Meetup",
      date: "January 10, 2026",
      location: "Cox’s Bazar, Bangladesh",
      description:
        "Experience aerial photography and capture breathtaking beach landscapes.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      title: "Fashion Photography Expo",
      date: "February 08, 2026",
      location: "Dhaka, Bangladesh",
      description:
        "Discover trends and artistry in fashion photography with top designers.",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 7,
      title: "Travel Photography Journey",
      date: "March 15, 2026",
      location: "Bandarban, Bangladesh",
      description:
        "Capture breathtaking landscapes while traveling through hills and rivers.",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 8,
      title: "Food Photography Workshop",
      date: "April 10, 2026",
      location: "Khulna, Bangladesh",
      description:
        "Learn to capture mouthwatering food shots with proper lighting & styling.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Upcoming <span className="text-indigo-400">Photography Events</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our photography sessions, workshops, and exhibitions to enhance
            your skills and capture breathtaking moments.
          </p>
        </div>

        {/* Swiper Slider with Coverflow Effect */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className=" background rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-target cursor-pointer">
                {/* Next.js Optimized Image */}
                <Image
                  src={event.image}
                  alt={event.title}
                  width={800}
                  height={500}
                  className="w-full h-60 object-cover"
                />

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <FaCalendarAlt className="w-4 h-4 mr-2 text-indigo-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-indigo-400" />
                    {event.location}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
