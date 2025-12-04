"use client";
import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";

export default function ProductPhotography() {
  const products = [
    {
      id: 1,
      title: "Luxury Watch",
      desc: "Studio-lit product shoot with metallic highlights.",
      image: "https://images.unsplash.com/photo-1719213073194-0d23de296a58?q=80",
      big: true,
    },
    {
      id: 2,
      title: "Perfume Bottle",
      desc: "Minimal reflective photography with soft shadows.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80",
    },
    {
      id: 3,
      title: "Sneakers",
      desc: "Bold and stylish lifestyle product visuals.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80",
    },
    {
      id: 4,
      title: "Smartphone",
      desc: "Perfect e-commerce ready product visuals.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80",
    },
  ];

  return (
    <section className="bg-gray-900 text-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20">
          <FaCameraRetro className="text-5xl text-indigo-400 mx-auto mb-4" />

          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Premium Product <span className="text-indigo-400">Photography</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            High-end, commercial-grade visuals crafted for brands, advertisements, 
            e-commerce stores, and luxury campaigns. Designed with precision and style.
          </p>
        </div>

        {/* NEW Premium Staggered Layout */}
        <div className="grid md:grid-cols-3 gap-10 auto-rows-[320px]">

          {products.map((p) => (
            <div
              key={p.id}
              className={`
                relative rounded-3xl overflow-hidden group cursor-target cursor-pointer 
                shadow-xl transition-all duration-700
                ${p.big ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              {/* Image */}
              <Image
                alt={p.title}
                src={p.image}
                width={1200}
                height={900}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 p-6 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
