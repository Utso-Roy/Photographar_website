"use client";
import React from "react";
import Image from "next/image";
import { FaBirthdayCake } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Birthday() {
const birthdayIdeas = [
  {
    id: 1,
    title: "Cake Cutting",
    description: "Celebrate with a beautifully decorated cake and joyful moments.",
    image: "https://images.unsplash.com/photo-1666811089839-ad17a1947a8c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Decorations",
    description: "Colorful balloons, streamers, and lights for a festive atmosphere.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Gift Giving",
    description: "Make birthdays special with thoughtful gifts and surprises.",
    image: "https://images.unsplash.com/photo-1512101147095-d05249ea9a04?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Party Games",
    description: "Fun and interactive games for friends and family to enjoy.",
    image: "https://images.unsplash.com/photo-1607798421923-ff44f5e5e343?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Photo Booth",
    description: "Capture fun moments with friends using creative photo setups.",
    image: "https://images.unsplash.com/photo-1727892349154-ac042a8565c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Themed Costumes",
    description: "Make the party lively with exciting themed costumes for everyone.",
    image: "https://images.unsplash.com/photo-1725374252532-2b18fdae2fab?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Music & Dance",
    description: "Enjoy lively music and dance sessions to celebrate in style.",
    image: "https://images.unsplash.com/photo-1581974944026-5d6ed762f617?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Birthday Wishes",
    description: "Collect heartfelt wishes and messages from friends and family.",
    image: "https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <FaBirthdayCake className="text-6xl mx-auto mb-4 animate-bounce text-yellow-300" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Birthday <span className="text-yellow-300">Celebrations</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Make every birthday unforgettable with beautiful decorations, gifts, and fun activities.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {birthdayIdeas.map((idea) => (
            <SwiperSlide key={idea.id}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={idea.image}
                    alt={idea.title}
                    fill
                    className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
                  />
                  {/* Title Overlay */}
                  <div className="absolute top-4 left-4 background bg-opacity-60 px-4 py-2 rounded-lg text-white text-lg font-semibold">
                    {idea.title}
                  </div>
                </div>

                {/* Description Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6 rounded-3xl">
                  <p className="text-gray-200 text-sm">{idea.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
