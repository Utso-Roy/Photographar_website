"use client";

import React from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="background text-white  px-6 sm:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-white">Services</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/services/wedding" className="hover:text-[#cc5200]">
                Wedding Photography
              </Link>
            </li>
            <li>
              <Link
                href="/services/corporate"
                className="hover:text-[#cc5200] "
              >
                Corporate Photography
              </Link>
            </li>
            <li>
              <Link href="/services/birthday" className="hover:text-[#cc5200]">
                Birthday Photography
              </Link>
            </li>
            <li>
              <Link href="/portfolio/travel" className="hover:text-[#cc5200]">
                Travel Photography
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-white">Company</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/pages/blog" className="hover:text-[#cc5200]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="hover:text-[#cc5200]">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/home/packagesSection"
                className="hover:text-[#cc5200]"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link href="/home/testimonials" className="hover:text-[#cc5200]">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h6 className="text-lg font-semibold mb-3 text-center text-white">Social</h6>
          <div className="flex gap-1">
            <Link
              href="#"
              className="bg-gray-800 p-3 rounded-lg hover:text-[#cc5200]"
            >
             <FaLinkedin size={20} />

            </Link>
            <Link
              href="#"
              className="bg-gray-800 p-3 rounded-lg hover:text-[#cc5200]"
            >
             <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="bg-gray-800 p-3 rounded-lg hover:text-[#cc5200]"
            >
              <FaSquareFacebook size={20} />{" "}
            </Link>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MonoLens. All rights reserved.
      </div>
    </footer>
  );
}
