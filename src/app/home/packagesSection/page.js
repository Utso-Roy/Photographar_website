"use client";
import React from "react";
import Image from "next/image";
import weddingImg from "../../assets/wedding.jpg";
import birthdayImg from "../../assets/BirthdayPhotography.jpg";
import travelImg from "../../assets/TravelPhotography.jpg";

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
      <div>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Packages</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the perfect photography package for your special moments.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="background rounded-2xl  overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={pkg.img}
                  alt={pkg.title}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{pkg.title}</h3>
                <p className=" text-lg font-bold mb-4">{pkg.price}</p>
                <ul className="text-gray-300 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="mb-1 before:content-['✔'] before:text-yellow-500 before:mr-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-yellow-500 text-base-100 btn font-semibold py-2 px-6 rounded-full ">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
