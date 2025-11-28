"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import  Container from '../../Container/page';

import weddingImg from "../../assets/wedding.jpg";
import birthdayImg from "../../assets/BirthdayPhotography.jpg";
import corporateImg from "../../assets/CorporateEvents.jpg";
import TravelPhotography from "../../assets/TravelPhotography.jpg";
import Image from "next/image";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    { title: "Wedding Photography", description: "Capture your special day with stunning shots.", img: weddingImg },
    { title: "Birthday Photography", description: "“Capture joyful moments of your birthday in style.", img: birthdayImg },
    { title: "Corporate Events", description: "Professional coverage for corporate events.", img: corporateImg },
    { title: "Travel Photography", description: "Capture every adventure with breathtaking photography.", img: TravelPhotography },
  ];

  return (
    <section className=" py-10">
      <Container>
        
         <div className="w-full ">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 text-lg">
            Professional photography services for every occasion.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="background rounded-lg  shadow-lg overflow-hidden hover:shadow-2xl transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative w-full h-64">
                  
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={500}
                    height={400}
                    priority={false}
                   
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     </Container>
    </section>
  );
}
