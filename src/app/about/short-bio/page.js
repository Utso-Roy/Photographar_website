"use client";
import Image from "next/image";
import React from "react";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import profile from '../../assets/profile.png';
export default function Bio() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-neutral-100 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Avatar Image */}
        <div className="flex-shrink-0">
          <Image
            src={profile}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-amber-400 object-cover shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">About Me</h2>
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
            I am a passionate <span className="text-amber-400 font-semibold">photographer</span> and <span className="text-amber-400 font-semibold">visual storyteller</span>, dedicated to capturing genuine moments and turning them into <span className="font-medium text-neutral-100">timeless memories</span>. I specialize in <span className="text-green-400 font-semibold">lifestyle</span>, <span className="text-blue-400 font-semibold">corporate</span>, and <span className="text-pink-400 font-semibold">event photography</span>, combining professionalism with creative vision.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-neutral-300">
            <a href="#" className="hover:text-amber-400 transition-colors"><FiInstagram /></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><FiLinkedin /></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><FiTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
