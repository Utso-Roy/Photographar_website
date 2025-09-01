"use client";
import CircularGallery from "../../../CircularGallery/CircularGallery.jsx";
import React from "react";

export default function Travel() {

  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Travel Photography
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore the world through our lens. Capture the beauty of travel,
          landscapes, and adventures in stunning detail.
        </p>
      </div>

      {/* Image Gallery */}
    <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>

      {/* Description Section */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 text-lg">
          Traveling opens up a world of inspiration. Our travel photography
          captures breathtaking landscapes, vibrant cultures, and unforgettable
          moments. Let us bring your adventures to life with professional
          quality and creativity.
        </p>
      </div>
    </section>
  );
}
