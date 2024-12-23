import FavouriteProducts from "./components/FavouriteProducts";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import { fetchProducts } from "../../lib/api";
import { Product } from "../../types/index";

export default async function Home() {
	const products: Product[] = await fetchProducts();
	return (
		<div>
			<NavigationBar></NavigationBar>
			<Hero></Hero>
			<FavouriteProducts products={products}></FavouriteProducts>
			<About></About>
		</div>
	);
}
