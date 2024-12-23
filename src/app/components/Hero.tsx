import React from "react";
import Image from "next/image";
import imageOne from "../../../public/assets/main-image.jpg";
import imageTwo from "../../../public/assets/main-image-2.jpg";

const Hero = () => {
	return (
		<section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 mt-10 ">
			<div className="mb-8 flex flex-wrap justify-between md:mb-16">
				<div className="mb-6 flex w-full flex-col justify-center sm:mb12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
					<h1 className="mb-4 text-5xl font-bold text-black lg:text-5xl md:mb-8 md:text-6xl lg:text-right text-center ">
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
							className="h-full w-full object-cover object-center rounded-xl"
							priority
							width={500}
							height={500}
						/>
					</div>
					<div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
						<Image
							src={imageTwo}
							alt="Great Photo"
							className="h-full w-full object-cover object-center rounded-xl"
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
