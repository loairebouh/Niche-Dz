import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "j7ywzfp6",
  dataset: "production",
  apiVersion: "2024-12-23",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

async function testSanityQuery() {
  const query = `*[_type == "product"]{_id, name, slug, mainImage, volume, priceBottle, category}`;
  try {
    const products = await client.fetch(query);
    if (products.length === 0) {
      console.log("No products found.");
    } else {
      console.log("Fetched products:", products);
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error.message);
  }
}

testSanityQuery();

export default client;
