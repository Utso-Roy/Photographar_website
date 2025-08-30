"use client";
import React from "react";
import DomeGallery from "@/DomeGallery/DomeGallery";

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div>
        <div className="text-center mb-12" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Recent Work
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Here are some of our recent works showcasing creativity and
            professional quality.
          </p>
        </div>

              <div className="block mx-auto" data-aos="fade-right" style={{ width: "100vw", height: "100vh" }}>
          <DomeGallery />
        </div>
      </div>
    </section>
  );
}
