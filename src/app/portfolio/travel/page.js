"use client";
import React, { useState } from "react";
import Image from "next/image";
import { 
  FaPlane, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaArrowRight, 
  FaStar, 
  FaHeart, 
  FaShareAlt,
  FaTicketAlt,
  FaChevronRight
} from "react-icons/fa";
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';

export default function TravelPortfolio() {
  const travels = [
    {
      id: 1,
      title: "Sunset at Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1656677476420-7159cac2366a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      duration: "5 Days",
      price: "$1,299",
    },
    {
      id: 2,
      title: "Mountains in Switzerland",
      location: "Switzerland",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      duration: "7 Days",
      price: "$2,199",
    },
    {
      id: 3,
      title: "Tokyo City Lights",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1493514901090-977e25adc0ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7,
      duration: "6 Days",
      price: "$1,899",
    },
    {
      id: 4,
      title: "Safari Adventure",
      location: "Kenya",
      image: "https://images.unsplash.com/photo-1602410141957-ee70b4739066?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.6,
      duration: "8 Days",
      price: "$2,799",
    },
    {
      id: 5,
      title: "Paris Eiffel Tower",
      location: "France",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
      duration: "4 Days",
      price: "$999",
    },
    {
      id: 6,
      title: "Beach Paradise",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1619045789769-3c9dfc5fe199?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      duration: "5 Days",
      price: "$3,499",
    },
  ];

  // Travel tips data
  const travelTips = [
    {
      id: 1,
      tip: "Pack Light",
      description: "Travel with carry-on only to save time and avoid lost luggage",
      icon: "🎒",
      category: "Packing",
    },
    {
      id: 2,
      tip: "Local SIM Card",
      description: "Get a local SIM for cheaper data and better connectivity",
      icon: "📱",
      category: "Connectivity",
    },
    {
      id: 3,
      tip: "Travel Insurance",
      description: "Always protect yourself with comprehensive travel insurance",
      icon: "🛡️",
      category: "Safety",
    },
  ];

  // Upcoming tours data
  const upcomingTours = [
    {
      id: 1,
      destination: "Bali Adventure",
      date: "2026-08-15",
      price: "$1,299",
      spots: 8,
      totalSpots: 12,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      destination: "European Explorer",
      date: "2026-09-20",
      price: "$2,499",
      spots: 5,
      totalSpots: 15,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      destination: "Amazon Rainforest",
      date: "2026-10-05",
      price: "$1,899",
      spots: 3,
      totalSpots: 10,
      image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-4 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6">
            <FaPlane className="text-3xl text-[#cc5200]" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Travel <span className="text-[#cc5200]">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore breathtaking destinations from around the world through our curated travel gallery.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            {["all", "Europe", "Asia", "Africa"].map((tab) => (
              <Button
                key={tab}
                label={tab.charAt(0).toUpperCase() + tab.slice(1)}
                onClick={() => setActiveTab(tab)}
                className={`p-button-rounded p-button-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "p-button-info"
                    : "p-button-secondary p-button-outlined"
                }`}
                style={{
                  backgroundColor: activeTab === tab ? '#cc5200' : 'transparent',
                  borderColor: activeTab === tab ? '#cc5200' : '#4b5563',
                  color: activeTab === tab ? '#ffffff' : '#d1d5db',
                  padding: '0.5rem 1.5rem',
                }}
              />
            ))}
          </div>
        </div>

        {/* Travel Cards Grid - FIXED: Added lg:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 mb-20">
          {travels.map((travel) => (
            <div
              key={travel.id}
              className="group relative bg-[#262626] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 "
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={travel.image}
                  alt={travel.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleFavorite(travel.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      favorites.includes(travel.id)
                        ? "bg-red-500 text-white"
                        : "bg-black/50 text-white hover:bg-black/70"
                    }`}
                  >
                    <FaHeart className="text-sm" />
                  </button>
                  <button className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all duration-300">
                    <FaShareAlt className="text-sm" />
                  </button>
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 left-4 bg-[#cc5200] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {travel.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#cc5200] transition-colors">
                    {travel.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-gray-300 text-sm">{travel.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#cc5200]" />
                    {travel.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#cc5200]" />
                    {travel.duration}
                  </span>
                </div>

                <Button
                  className="p-button-rounded w-full font-medium flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    border: 'none',
                    color: '#818cf8',
                    padding: '0.75rem',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#6366f1';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
                    e.currentTarget.style.color = '#818cf8';
                  }}
                >
                  <span>Explore Now</span>
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips Section - Consistent grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Essential <span className="text-[#cc5200]">Travel Tips</span>
            </h3>
            <p className="text-gray-400 text-lg">Make your journey smoother with these pro tips</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-3 gap-5">
            {travelTips.map((tip) => (
              <div
                key={tip.id}
                className="group relative bg-[#262626] rounded-2xl p-6  hover:border-indigo-500 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 bg-[#cc5200] text-[#ffffff] px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-medium">
                  {tip.category}
                </div>
                
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {tip.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">{tip.tip}</h4>
                <p className="text-gray-400 leading-relaxed">{tip.description}</p>
                
                <Button
                  className="p-button-text p-button-sm mt-6 font-medium flex items-center gap-2"
                  style={{ color: '#cc5200', padding: '0' }}
                >
                  <span>Read More</span>
                  <FaArrowRight className="text-xs" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tours Section - Consistent grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Upcoming <span className="text-[#cc5200]">Group Tours</span>
            </h3>
            <p className="text-gray-400 text-lg">Join our next adventure - limited spots available</p>
          </div>
          
          <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-[#262626] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 "
              >
                {/* Tour Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.destination}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-2xl font-bold text-white">
                      {tour.destination}
                    </h4>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendarAlt className="text-[#fafafa]" />
                      <span>
                        {new Date(tour.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-[#ffffff]">
                      {tour.price}
                    </span>
                  </div>
                  
                  {/* Spots Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Available Spots</span>
                      <span className="text-[#ffffff] font-medium">
                        {tour.spots} of {tour.totalSpots}
                      </span>
                    </div>
                    <ProgressBar
                      value={(tour.spots / tour.totalSpots) * 100}
                      style={{ height: '8px', borderRadius: '10px' }}
                      color="#cc5200"
                    />
                  </div>
                  
                  <Button
                    className="p-button-rounded w-full font-medium flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: '#cc5200',
                      border: 'none',
                      color: 'white',
                      padding: '0.75rem',
                      boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#cc5200';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(99, 102, 241, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#cc5200';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(99, 102, 241, 0.3)';
                    }}
                  >
                    <FaTicketAlt />
                    <span>Reserve Your Spot</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}