"use client";
import Link from "next/link";
import React from "react";
import camera from "../../assets/camera.json";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { Avatar } from "primereact/avatar";
export default function Navbar() {
  const pathName = usePathname();

  const links = (
    <>
      <Link href="/">
        <li>
          <a className={pathName === "/" ? " underline font-bold" : ""}>Home</a>
        </li>
      </Link>

      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 text-black">
            <Link href="/services/wedding">
              <li>
                <a
                  className={
                    pathName === "/services/wedding"
                      ? "underline  font-bold"
                      : ""
                  }
                >
                  Wedding
                </a>
              </li>
            </Link>
            <Link href="/services/birthday">
              <li>
                <a
                  className={
                    pathName === "/services/birthday"
                      ? "underline font-bold"
                      : ""
                  }
                >
                  Birthday
                </a>
              </li>
            </Link>
            <Link href="/services/corporate">
              <li>
                <a
                  className={
                    pathName === "/services/corporate"
                      ? "underline font-bold"
                      : ""
                  }
                >
                  Corporate
                </a>
              </li>
            </Link>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>Portfolio</summary>
          <ul className="p-2 text-black">
            <Link href="/portfolio/events">
              <li>
                <a
                  className={
                    pathName === "/portfolio/events"
                      ? "underline font-bold"
                      : ""
                  }
                >
                  Events
                </a>
              </li>
            </Link>
            <Link href="/portfolio/travel">
              <li>
                <a
                  className={
                    pathName === "/portfolio/travel"
                      ? "underline font-bold"
                      : ""
                  }
                >
                  Travel
                </a>
              </li>
            </Link>
            <Link href="/portfolio/product-photography">
              <li>
                <a
                  className={
                    pathName === "/portfolio/product-photography"
                      ? "underline font-bold"
                      : ""
                  }
                >
                  Product Photography
                </a>
              </li>
            </Link>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>About Me</summary>
          <ul className="p-2 text-black">
            <Link href="/about/short-bio">
              <li>
                <a
                  className={
                    pathName === "/about/short-bio" ? "underline font-bold" : ""
                  }
                >
                  Short Bio
                </a>
              </li>
            </Link>
            <Link href="/about/experience">
              <li>
                <a
                  className={
                    pathName === "/about/experience"
                      ? "underline font-bold"
                      : ""
                  }
                >
                  Experience
                </a>
              </li>
            </Link>
            <Link href="/about/achievement">
              <li>
                <a
                  className={
                    pathName === "/about/achievement"
                      ? "underline font-bold"
                      : ""
                  }
                >
                  Achievement
                </a>
              </li>
            </Link>
            <Link href="/about/journey">
              <li>
                <a
                  className={
                    pathName === "/about/journey" ? "underline font-bold" : ""
                  }
                >
                  Journey
                </a>
              </li>
            </Link>
          </ul>
        </details>
      </li>

      <Link href="/home/testimonials">
        <li>
          <a
            className={
              pathName === "/home/testimonials" ? "underline font-bold" : ""
            }
          >
            Testimonials
          </a>
        </li>
      </Link>

      <Link href="/pages/blog">
        <li>
          <a
            className={pathName === "/pages/blog" ? "underline font-bold" : ""}
          >
            Blog
          </a>
        </li>
      </Link>

      <Link href="/pages/booking">
        <li>
          <a
            className={
              pathName === "/pages/booking" ? "underline font-bold" : ""
            }
          >
            Booking
          </a>
        </li>
      </Link>

      <Link href="/pages/contact">
        <li>
          <a
            className={
              pathName === "/pages/contact" ? "underline font-bold" : ""
            }
          >
            Contact
          </a>
        </li>
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar z-50   bg-white/5 backdrop-blur-2xl  fixed top-0  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn text-white btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 flex justify-center items-center h-10">
              <p className="text-white text-xl font-semibold "> MonoLens</p>
              <Lottie animationData={camera} loop={true} />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
      <Link href="/pages/login">
        <Avatar
          icon="pi pi-user"
          shape="circle"
          size="large"
          className="cursor-pointer !text-[#cc5200]"
        />
      </Link>
    </div>
      </div>
    </div>
  );
}
