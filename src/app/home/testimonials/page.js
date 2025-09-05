"use client";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonialsData = [
  {
    name: "Sarah Johnson",
    designation: "Bride",
    feedback:
      "Utso captured every special moment of our wedding perfectly! Highly recommended.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    designation: "Corporate Client",
    feedback:
      "Professional, punctual, and creative. The photos from our corporate event were amazing!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Davis",
    designation: "Travel Blogger",
    feedback:
      "The travel shots were breathtaking! Really brought my adventures to life.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-18 px-5 ">
      <div className=" ">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">
            Testimonials
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear what our clients have to say about our photography services.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform transition duration-500 relative m-3">
                <FaQuoteLeft className="text-yellow-400 text-3xl absolute -top-5 -left-5" />

                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-yellow-500 shadow-md mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className=" text-sm">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 italic mb-4">{testimonial.feedback}</p>
                <FaQuoteRight className=" text-2xl float-right" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
