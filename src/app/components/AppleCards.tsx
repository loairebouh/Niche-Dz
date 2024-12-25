"use client";
import React from "react";
import { Carousel, Card } from "./ui/Carousel";
import yalidinPic from "../../../public/assets/cards/yalidine.jpg";
import collectionPic from "../../../public/assets/cards/collection.jpg";
import pricingPic from "../../../public/assets/cards/pricing.jpg";
import exclusivePic from "../../../public/assets/cards/exclusive.webp";
import divisionPic from "../../../public/assets/cards/division.webp";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    // @ts-expect-error aaa aaa aaa
    <Card key={index} card={index} index={index} />
  ));
  return (
    <div className="h-full w-full py-20">
      <h2 className="mx-auto max-w-7xl pl-4 text-center font-sans text-4xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-5xl">
        Plus De Nous
      </h2>
      <p className="mx-3 mt-3 text-center text-gray-500">
        Découvrez notre histoire et notre passion pour offrir les meilleurs
        produits
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Livraison",
    title: "Livraison Rapide 48 heures ",
    src: yalidinPic,
  },
  {
    category: "Nos Produits",
    title: "Une Large Collection Des Parfum Originaux",
    src: collectionPic,
  },
  {
    category: "Exclusive",
    title: "Toute Notre Collection de Produits Exclusifs",
    src: exclusivePic,
  },

  {
    category: "Prix",
    title: "Meilleur Prix au Marché Algerien",
    src: pricingPic,
  },
  {
    category: "Divison",
    title: "Diviser Les Parfums Originaux à Partir de 10 ml",
    src: divisionPic,
  },
];
