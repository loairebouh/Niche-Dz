"use client";
import React, { useState } from "react";
import logo from "../../../public/assets/niche-dz.png";
import Image from "next/image";

const NavigationBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className=" border-gray-600">
			<div className="bg-white px-6 py-3 flex justify-between items-center border-b border-gray-600">
				<div className="space-x-6 lg:block hidden">
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
					<Image src={logo} alt="logo" width={100} />
				</div>
				<div className="lg:block hidden">
					<button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
						Contacter Nous
					</button>
				</div>
				<div className="lg:hidden flex items-center ml-auto">
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
				className={`lg:hidden border-b border-gray-600 bg-black py-2 transition-opacity duration-300 ease-in-out ${
					isMenuOpen ? "opacity-100 " : "opacity-0 pointer-events-none "
				}`}
			>
				<a
					href="#"
					className="block text-md font-semibold text-white px-6 py-2 hover:text-gray-600"
				>
					Boutique
				</a>
				<a
					href="#"
					className="block text-md font-semibold text-white px-6 py-2 hover:text-gray-600"
				>
					De Nous
				</a>
			</div>
		</nav>
	);
};

export default NavigationBar;
