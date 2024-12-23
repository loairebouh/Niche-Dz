import React from "react";
import { Product } from "../../../types/index";
import { urlFor } from "../../../lib/sanity";
import { GrFormView } from "react-icons/gr";

interface FavouriteProductsProps {
	products: Product[];
}

const FavouriteProducts: React.FC<FavouriteProductsProps> = ({ products }) => {
	const firstFourProducts = products.slice(0, 4);

	return (
		<div className="max-w-7xl mx-auto px-4 border-b border-gray-700">
			<h1 className="text-center lg:text-5xl text-4xl font-bold mt-10">
				Nos choix
			</h1>
			<p className="text-center mt-3 text-gray-500">
				Jetez un œil à nos propositions pour vous
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
				{firstFourProducts.map((product) => (
					<div key={product._id} className="flex flex-col items-center mb-10">
						<div className="relative overflow-hidden rounded-3xl w-full">
							<img
								src={urlFor(product.mainImage).width(400).url()}
								alt={product.name}
								className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
							/>
							<div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-lg">
								{product.volume} mL
							</div>
						</div>
						<div className="mt-4 w-full">
							<div className="flex flex-row justify-between items-center">
								<h2 className="font-semibold text-md text-gray-800">
									{product.name}
								</h2>
								<p className="text-lg font-bold text-gray-900">
									{product.priceBottle ? `${product.priceBottle} DA` : "N/A"}
								</p>
							</div>
							<div className="mt-2 text-sm text-gray-600">
								<p>
									<strong>Category:</strong>{" "}
									<span className="capitalize">{product.category}</span>
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center align-center mb-5">
				<button className=" flex flex-row justify-center items-center gap-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-bold dark:border-white dark:text-white text-black rounded-2xl font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white">
					Tout les produits
					<span>
						<GrFormView />
					</span>
				</button>
			</div>
		</div>
	);
};

export default FavouriteProducts;
