"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Author from '../../assets/author.jpg'
import  Container from '../../Container/page';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Mastering Portrait",
      desc: "Learn how to capture stunning portraits with natural lighting and perfect angles.",
      author: "Utso Roy",
      date: "Sep 5, 2025",
      image:
        "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Top 5 Travel Photography Tips",
      desc: "Explore the secrets of travel photography to capture your journeys like a pro.",
      author: "Utso Roy",
      date: "Sep 3, 2025",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Wedding Photography Secrets",
      desc: "A guide to candid wedding shots, lighting tricks, and timeless memories.",
      author: "Utso Roy",
      date: "Aug 28, 2025",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Street Photography Vibes",
      desc: "How to capture raw emotions and stories from streets with your lens.",
      author: "Utso Roy",
      date: "Aug 22, 2025",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Night Sky Photography",
      desc: "Tips to capture stunning star trails and night landscapes.",
      author: "Utso Roy",
      date: "Aug 15, 2025",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Macro Photography Magic",
      desc: "Discover the beauty in tiny details with macro shots and capture photo",
      author: "Utso Roy",
      date: "Aug 10, 2025",
      image:
        "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Landscape Photography ",
      desc: "Learn how to capture breathtaking landscapes and natural scenes.",
      author: "Utso Roy",
      date: "Aug 5, 2025",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Creative Black & White ",
      desc: "Master the art of monochrome photography for timeless images.",
      author: "Utso Roy",
      date: "Aug 1, 2025",
      image:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className=" py-20 min-h-screen ">
      {/*  Hero Section */}
    <Container>



        <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Photography Blog
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore tips, tutorials, and stories from behind the lens. Get
          inspired and improve your photography skills with expert insights.
        </p>
      </div>

      {/* Category Filter + Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
        <div className="flex gap-3 flex-wrap">
          {["All", "Portrait", "Travel", "Wedding", "Street"].map((cat) => (
            <Button
              key={cat}
              label={cat}
              className="my-btn p-button-rounded"
              style={{ border: "none", boxShadow: "none" }}
            />
          ))}
        </div>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search blog..." />
        </span>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
  
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-amber-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer cursor-target"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl text-black font-semibold mb-2">
                  {blog.title}
                </h2>
                <p className="text-black text-sm mb-4">{blog.desc}</p>

                {/*  Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={Author}
                    alt="author"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="text-xs text-black">
                    By {blog.author} • {blog.date}
                  </p>
                </div>

                <Button label="Read More" className="p-button-rounded my-btn" />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*  Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-black text-white py-10 rounded-2xl text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-6">
          Get weekly photography tips & tutorials directly in your inbox.
        </p>
        <div className="flex justify-center gap-2">
          <InputText placeholder="Enter your email" className="w-64" />
          <Button
            className="my-btn"
            label="Subscribe"
            icon="pi pi-send"
            style={{ border: "none", boxShadow: "none" }}
          />
        </div>
      </motion.div>
    </Container>
    </div>
  );
}
