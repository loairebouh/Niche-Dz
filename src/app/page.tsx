import FavouriteProducts from "./components/FavouriteProducts";
import Hero from "./components/Hero";
import { fetchProducts } from "../../lib/api/getAllProducts/route";
import { Product } from "../../types/index";
import { AppleCardsCarouselDemo } from "./components/AppleCards";
import Footer from "./components/Footer";

export default async function Home() {
  const products: Product[] = await fetchProducts();
  return (
    <div>
      <Hero></Hero>
      <FavouriteProducts products={products}></FavouriteProducts>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      <Footer></Footer>
    </div>
  );
}
