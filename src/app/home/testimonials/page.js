import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import  Container from '../../Container/page';

const testimonialsData = [
  {
    name: "Sarah Johnson",
    designation: "Bride",
    feedback: "Utso captured every special moment of our wedding perfectly! The attention to detail and creative angles made our album extraordinary.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Michael Lee",
    designation: "Corporate Client",
    feedback: "Beautifully captured with true professionalism and perfect timing! The corporate headshots elevated our entire brand image.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Emily Davis",
    designation: "Travel Blogger",
    feedback: "The travel shots were breathtaking! Really brought my adventures to life and my followers absolutely loved them.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-24 px-5 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gray-800"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

    <Container>


        <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-white text-sm font-semibold tracking-widest uppercase">
              Client Stories
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Loved by <span className="text-white">Creatives</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it—hear from the people who've experienced our work firsthand.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-1 shadow-2xl">
            <div className="bg-slate-900/90 rounded-3xl p-8 md:p-12 relative">
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-6 left-6 text-purple-500/20 text-5xl" />
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Image Section */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ff6600] rounded-2xl blur-xl opacity-50"></div>
                  <Image
                    src={testimonialsData[currentIndex].img}
                    alt={testimonialsData[currentIndex].name}
                    width={160}
                    height={160}
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-slate-700/50 shadow-2xl"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                    &ldquo;{testimonialsData[currentIndex].feedback}&rdquo;
                  </p>

                  {/* Name & Designation */}
                  <div>
                    <h4 className="text-white font-bold text-2xl mb-1">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium">
                      {testimonialsData[currentIndex].designation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center md:justify-end gap-3 mt-8">
                <button
                  onClick={prev}
                  className="group bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="text-gray-400 group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={next}
                  className="group bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-6 mt-24 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              500+
            </div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              5.0
            </div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              1000+
            </div>
            <div className="text-gray-400 text-sm">Projects Done</div>
          </div>
        </div>
      </div>
    </Container>
    </section>
  );
}