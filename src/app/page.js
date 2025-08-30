"use client";
import React from "react";
import Image from "next/image";
import heroImage from "@/app/assets/photographer.jpg";
import Services from "./home/services/page";
import Portfolio from "./home/portfolio/page";
import Travel from "./home/travel/page";
import Testimonials from "./home/testimonials/page";

export default function Home() {
  return (
    <div className="space-y-5">
       <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Photographer at work"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          MonoLens Photography
        </h1>
        <p className="text-white text-lg lg:text-2xl max-w-2xl drop-shadow-md">
          Capturing your precious moments with professional quality.
        </p>
       
      </div>
      </section>
      
      <section className="px-5">

       <Services></Services>
      </section>
      <section className="px-5">

       <Portfolio></Portfolio>
      </section>
      <section className="px-5">

       <Travel></Travel>
      </section>
      <section className="px-5">

       <Testimonials></Testimonials>
      </section>
   </div>
  );
}
