"use client";
import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Wedding() {
  const weddings = [
    {
      id: 1,
      title: "Beach Wedding Bliss",
      couple: "Emma & John",
      image: "https://images.unsplash.com/photo-1755795652039-c95221cc55fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Royal Palace Wedding",
      couple: "Sophia & Liam",
      image: "https://images.unsplash.com/photo-1610379230744-2260350e2f17?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Rustic Countryside Wedding",
      couple: "Olivia & Noah",
      image: "https://images.unsplash.com/photo-1729603370273-facc0600d259?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Garden Wedding Celebration",
      couple: "Ava & Ethan",
      image: "https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
    {
      id: 5,
      title: "Mountain Top Wedding",
      couple: "Isabella & James",
      image: "https://images.unsplash.com/photo-1756143058430-c71365889d82?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Vintage Wedding Style",
      couple: "Charlotte & Benjamin",
      image: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Romantic Sunset Wedding",
      couple: "Amelia & Daniel",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 px-6  text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FaHeart className="text-5xl text-pink-500 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Wedding <span className="text-pink-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Capturing the most magical wedding moments with elegance and style.
          </p>
        </div>

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
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {weddings.map((wedding) => (
            <SwiperSlide key={wedding.id}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
                <Image
                  src={wedding.image}
                  alt={wedding.title}
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 background bg-opacity-60 p-4 text-center">
                  <h3 className="text-lg font-bold text-white">{wedding.title}</h3>
                  <p className="text-gray-300 text-sm">{wedding.couple}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
