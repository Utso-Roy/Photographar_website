"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button"; 


export default function CallToActionSection() {
  return (
    <section className=" text-white py-12 px-6">
      <div className=" text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Capture Your Best Moments
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-300 mb-10 mx-auto"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Whether it’s your wedding, event, or a personal photoshoot — I’m here
          to turn your story into timeless memories. Don’t wait, let’s create magic together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Button 
            label="Book a Session" 
            className="p-button-rounded p-button-outlined p-button-warning font-semibold px-6 py-3" 
            icon="pi pi-calendar"
          />
          <Button 
            label="View Portfolio" 
            className="p-button-rounded p-button-outlined p-button-warning font-semibold px-6 py-3" 
            icon="pi pi-images"
          />
        </motion.div>
      </div>
    </section>
  );
}
