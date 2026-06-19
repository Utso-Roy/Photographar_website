"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function Wedding() {
  const weddings = [
    {
      id: 1,
      title: "Beach Wedding Bliss",
      couple: "Emma & John",
      image:
        "https://images.unsplash.com/photo-1755795652039-c95221cc55fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Royal Palace Wedding",
      couple: "Sophia & Liam",
      image:
        "https://images.unsplash.com/photo-1610379230744-2260350e2f17?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Rustic Countryside Wedding",
      couple: "Olivia & Noah",
      image:
        "https://images.unsplash.com/photo-1729603370273-facc0600d259?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Garden Wedding Celebration",
      couple: "Ava & Ethan",
      image:
        "https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Mountain Top Wedding",
      couple: "Isabella & James",
      image:
        "https://images.unsplash.com/photo-1756143058430-c71365889d82?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Vintage Wedding Style",
      couple: "Charlotte & Benjamin",
      image:
        "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Romantic Sunset Wedding",
      couple: "Amelia & Daniel",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-20 px-6 text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <FaHeart className="text-5xl text-pink-500 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Wedding <span className="text-pink-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Capturing the most magical wedding moments with elegance and style.
          </p>
        </div>

        {/* Masonry-style responsive grid, replaces Swiper carousel */}
        <div className="columns-1 sm:columns-3 lg:columns-4  space-y-6 ">
          {weddings.map((wedding) => (
            <div
              key={wedding.id}
              onMouseEnter={() => setActiveId(wedding.id)}
              onMouseLeave={() => setActiveId(null)}
              className="relative rounded-2xl  overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition duration-300 cursor-pointer group border border-pink-500/10"
            >
              <Image
                src={wedding.image}
                alt={wedding.title}
                width={800}
                height={500}
                className={`w-full h-72 object-cover transition duration-500 ${
                  activeId === wedding.id ? "scale-110" : "scale-100"
                }`}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Heart badge */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <FaHeart className="text-pink-500 text-sm" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">{wedding.title}</h3>
                <p className="text-pink-400 text-sm">{wedding.couple}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}