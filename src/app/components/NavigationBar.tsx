"use client";
import React, { useState } from "react";
import logo from "../../../public/assets/niche-dz.png";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-gray-600">
      <div className="flex items-center justify-between border-b border-gray-600 bg-white px-6 py-3">
        <div className="hidden space-x-6 lg:block">
          <a
            href="#"
            className="text-md font-semibold text-black hover:text-gray-600"
          >
            Boutique
          </a>
          <a
            href="#"
            className="text-md font-semibold text-black hover:text-gray-600"
          >
            De Nous
          </a>
        </div>
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={100} />
          </Link>
        </div>
        <div className="hidden lg:block">
          <button className="duration-400 transform rounded-lg bg-black px-6 py-2 font-bold text-white transition hover:-translate-y-1">
            Contacter Nous
          </button>
        </div>
        <div className="ml-auto flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`border-b border-gray-600 bg-black py-2 transition-opacity duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <a
          href="#"
          className="text-md block px-6 py-2 font-semibold text-white hover:text-gray-600"
        >
          Boutique
        </a>
        <a
          href="#"
          className="text-md block px-6 py-2 font-semibold text-white hover:text-gray-600"
        >
          De Nous
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
