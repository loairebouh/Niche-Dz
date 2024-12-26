/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { notFound } from "next/navigation";
import sanityClient from "../../../../lib/sanity";
import { urlFor } from "../../../../lib/sanity";
import { Product } from "../../../../types";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const query = `*[_type == "product"]{slug}`;
  const products = await sanityClient.fetch(query);

  return products.map((product: { slug: { current: string } }) => ({
    slug: product.slug.current,
  }));
}

const ProductDetails = async ({ params }: Props) => {
  const { slug } = params;
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const product: Product = await sanityClient.fetch(query, { slug });

  if (!product) {
    notFound();
  }

  const images = product.otherImages || [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 lg:text-5xl">
        {product.name}
      </h1>
      <p className="mt-2 text-lg text-gray-600">{product.description}</p>

      {/* Main Image */}
      {product.mainImage && (
        <div className="mt-6">
          <Image
            src={urlFor(product.mainImage).url()}
            alt={product.name}
            width={500}
            height={500}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
      )}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image: any, index: number) => (
          <div key={index} className="relative overflow-hidden rounded-xl">
            <Image
              src={urlFor(image).url()}
              alt={`${product.name} - Image ${index + 1}`}
              width={500}
              height={500}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-2xl font-bold text-gray-900">
          Price: {product.priceBottle ? `${product.priceBottle} DA` : "N/A"}
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Volume: {product.volume} mL
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Category: <span className="capitalize">{product.category}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
