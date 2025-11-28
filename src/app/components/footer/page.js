"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import  Container from '../../Container/page';

export default function Footer() {
  return (
    <footer className="background text-gray-300 px-6 sm:px-20 py-16">
      <Container>
        

         <div >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mono<span className="text-orange-500">Lens</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Capturing life's precious moments with creativity and passion. Professional photography services for every occasion.
            </p>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-bold mb-5 text-white relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h6>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/wedding" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Corporate Photography
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/birthday" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Birthday Photography
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio/travel" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Travel Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-bold mb-5 text-white relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h6>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/pages/blog" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/pages/contact" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/home/packagesSection"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Packages
                </Link>
              </li>
              <li>
                <Link 
                  href="/home/testimonials" 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h6 className="text-lg font-bold mb-5 text-white relative inline-block">
              Connect
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500"></span>
            </h6>
            <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
              >
                <FaSquareFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} MonoLens. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
     </Container>
    </footer>
  );
}