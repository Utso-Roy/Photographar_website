"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-5">
      {/* 404 number */}
      <motion.h1
        className="text-8xl font-extrabold text-orange-600 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-500 mb-6 max-w-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Oops! The page you are looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link
          href="/"
          className="px-6 py-3 my-btn text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  )
}
