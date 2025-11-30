"use client";
import React from "react";
import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function ProductPhotography() {
  const products = [
    {
      id: 1,
      title: "Luxury Watch",
      description: "High-end product photography with studio lighting.",
      image: "https://images.unsplash.com/photo-1719213073194-0d23de296a58?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Modern Sneakers",
      description: "Creative lifestyle product photography for fashion brands.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Perfume Bottle",
      description: "Elegant and minimalistic product shoot with reflections.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Smartphone",
      description: "Clean e-commerce ready product photography.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Headphones",
      description: "Minimalistic product shots for online stores.",
      image: "https://images.unsplash.com/photo-1628116709703-c1c9ad550d36?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Fashion Bag",
      description: "Stylish product photography for fashion campaigns.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Coffee Mug",
      description: "Lifestyle product shots with props and soft lighting.",
      image: "https://images.unsplash.com/photo-1499961524705-bfd103e65a6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Sunglasses",
      description: "Bright, outdoor product photography with reflection control.",
      image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FaCameraRetro className="text-5xl text-indigo-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Product <span className="text-indigo-400">Photography</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional product photography to make your brand stand out.
            Perfect for e-commerce, catalogs, and advertisements.
          </p>
        </div>

        {/* Swiper Coverflow Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={40}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-target cursor-pointer">
                {/* Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  width={800}
                  height={500}
                  className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm">{product.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
