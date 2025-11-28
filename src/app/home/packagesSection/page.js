"use client";
import React from "react";
import Image from "next/image";
import weddingImg from "../../assets/wedding (2).jpg";
import birthdayImg from "../../assets/BirthdayPhotography.jpg";
import travelImg from "../../assets/TravelPhotography.jpg";
import Link from "next/link";
import Container from '../../Container/page';

const packages = [
  {
    title: "Wedding Package",
    price: "$1200",
    features: ["Full Day Coverage", "Edited Photos", "Photo Album"],
    img: weddingImg,
  },
  {
    title: "Birthday Package",
    price: "$500",
    features: ["2 Hours Coverage", "Edited Photos", "Video Highlights"],
    img: birthdayImg,
  },
  {
    title: "Travel Package",
    price: "$800",
    features: ["Destination Photoshoot", "Edited Photos", "Digital Gallery"],
    img: travelImg,
  },
];

export default function PackageSection() {
  return (
    <section className="py-12 bg-gray-900">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Packages
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Choose the perfect photography package for your special moments.
          </p>
        </div>

        {/* Package Cards */}
        <div className="package-grid gap-6 md:gap-5 ">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <Image
                  src={pkg.img}
                  alt={pkg.title}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {pkg.title}
                </h3>
                <p className="text-lg md:text-xl font-bold mb-4 text-yellow-500">
                  {pkg.price}
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start"
                    >
                      <span className="text-yellow-500 mr-2">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pages/booking" className="block">
                  <button className="my-btn text-base-100 font-semibold py-2 px-6 cursor-pointer rounded-full w-full sm:w-auto hover:scale-105 transition-transform">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
      
      <style jsx>{`
        .package-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        
        @media (min-width: 640px) {
          .package-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1300px) {
          .package-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}