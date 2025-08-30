"use client";
import React from "react";
export default function Navbar() {
  const links = (
    <>
        <li><a>Home</a></li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 text-black">
            <li><a>Wedding</a></li>
            <li><a>Birthday</a></li>
            <li><a>Corporate</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Portfolio</summary>
          <ul className="p-2 text-black">
            <li><a>Wedding</a></li>
            <li><a>Events</a></li>
            <li><a>Travel</a></li>
            <li><a>Product Photography</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>About Me</summary>
          <ul className="p-2 text-black">
            <li><a>Short Bio</a></li>
            <li><a>Experience</a></li>
            <li><a>Achievement</a></li>
            <li><a>Photographer Journey</a></li>
          </ul>
        </details>
      </li>
      <li><a>Textmonials</a></li>
      <li><a>Blog</a></li>
      <li><a>Booking</a></li>
      <li><a>Contact</a></li>
      
    </>
  );

  return (
    <div>
     <div className="navbar z-50 bg-gradient-to-r from-[#000000] to-[#434343] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className=" text-lg text-white">MonoLens</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-white menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  );
}
