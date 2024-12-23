import React from "react";
import { Product } from "../../../types/index";
import { urlFor } from "../../../lib/sanity";

interface FavouriteProductsProps {
	products: Product[];
}

const FavouriteProducts: React.FC<FavouriteProductsProps> = ({ products }) => {
	return (
		<div className="max-w-7xl mx-auto px-4">
			<h1 className="text-center lg:text-5xl text-4xl font-bold mt-10">
				Nos choix
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
				{products.map((product) => (
					<div key={product._id} className="">
						<div className="relative overflow-hidden rounded-3xl">
							<img
								src={urlFor(product.mainImage).width(300).url()}
								alt={product.name}
								className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<div>
							<div className="mt-4">
								<div className="flex flex-row gap-1">
									<h2 className="font-semibold text-md text-gray-800">
										{product.name}
									</h2>
									<p className="text-lg font-bold text-gray-900">
										{product.priceBottle ? `${product.priceBottle} DA` : "N/A"}
									</p>
								</div>
								<div className="mt-2 text-sm text-gray-600 space-y-1">
									<p>
										<strong>Volume:</strong> {product.volume} mL
									</p>
									<p>
										<strong>Category:</strong>{" "}
										<span className="capitalize">{product.category}</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FavouriteProducts;
