import React from "react";
import logoWhite from "../../../public/assets/niche-dz-white.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black py-4 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex items-center">
          <Image
            src={logoWhite}
            alt="niche dz"
            width={240}
            height={80}
            className="p-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="py-4 text-2xl font-bold lg:text-3xl">
            Navigation
          </span>
          <a href="/" className="text-lg hover:text-gray-400">
            <h1>Home</h1>
          </a>
          <a href="/" className="text-lg hover:text-gray-400">
            <h1>Produits</h1>
          </a>
        </div>
        <div className="mb-3 flex flex-col gap-1 lg:mb-0">
          <span className="py-4 text-2xl font-bold lg:text-3xl">Contacter</span>
          <a href="/" className="text-lg hover:text-gray-400">
            <h1>Facbook</h1>
          </a>
          <a href="/" className="text-lg hover:text-gray-400">
            <h1>Instagram</h1>
          </a>
        </div>
        <div className="mb-10 flex flex-col gap-1 lg:mb-0">
          <button className="duration-400 transform rounded-lg bg-white px-6 py-2 font-bold text-black transition hover:-translate-y-1">
            Contacter Nous
          </button>
        </div>
        <p>All Rights Reserved To Niche Dz 2025</p>
      </div>
    </div>
  );
};

export default Footer;
