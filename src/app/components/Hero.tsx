import React from "react";
import Image from "next/image";
import imageOne from "../../../public/amberoud.jpeg";
import imageTwo from "../../../public/naxos.jpeg";

const Hero = () => {
  return (
    <section className="mx-auto mt-10 max-w-2xl border-b border-gray-800 px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="sm:mb12 mb-6 flex w-full flex-col justify-center lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-center text-5xl font-bold text-black md:mb-8 md:text-6xl lg:text-right lg:text-5xl">
            L&apos;odeur du luxe, l&apos;essence de{" "}
            <span>l&apos;authenticité</span>
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Nous ne proposons que les produits les plus exclusifs et de la
            meilleure qualité pour vous. Nous sommes les meilleurs, alors venez
            faire vos achats chez nous.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-xl bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={imageOne}
              alt="Hero Pic"
              className="h-full w-full rounded-xl object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
          <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <Image
              src={imageTwo}
              alt="Great Photo"
              className="h-full w-full rounded-xl object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
