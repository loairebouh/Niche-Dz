import client from "../../sanity";

export const fetchProducts = async () => {
  const query = `
    *[_type == "product"] {
      _id,
      name,
      slug,
      volume,
      category,
      description,
      notes[]{
        noteName,
        noteInfo
      },
      mainImage,
      otherImages,
      saleOptions,
      priceBottle,
      priceDivision
    }
  `;
  const products = await client.fetch(query);
  return products;
};
