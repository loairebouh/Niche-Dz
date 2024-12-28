"use client";

import { useState, useEffect } from "react";
import { Product } from "../../../types";
import { wilayas } from "./Wilayas";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";

interface OrderFormProps {
  product: Product;
}

const OrderForm: React.FC<OrderFormProps> = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: 1,
    wilaya: "",
    county: "",
    deliveryType: "",
    buyChoice: "",
    divisionQty: 10,
  });
  const [selectedWilaya, setSelectedWilaya] = useState<number | null>(null);
  const [orderPrice, setOrderPrice] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrderClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleBuyChoice = (choice: string) => {
    setFormData((prevData) => ({ ...prevData, buyChoice: choice }));
  };

  useEffect(() => {
    const calculateOrderPrice = () => {
      const price = product.priceBottle ?? 0;
      const divisionPrice = product.priceDivision ?? 0;

      if (formData.buyChoice === "full") {
        setOrderPrice(price);
      }

      if (formData.buyChoice === "divided") {
        const qtyMultiplier = formData.divisionQty / 10;
        setOrderPrice(divisionPrice * qtyMultiplier);
      }
    };

    calculateOrderPrice();
  }, [formData.buyChoice, formData.divisionQty, product]);

  const getSalesOption = () => {
    const { saleOptions } = product;

    if (saleOptions === "both") {
      return (
        <div className="flex gap-2 rounded-xl border-2 bg-black px-4 py-2 text-white">
          <label className="flex gap-1">
            <input
              type="radio"
              name="buyChoice"
              value="divided"
              checked={formData.buyChoice === "divided"}
              onChange={() => handleBuyChoice("divided")}
            />
            Division (10mL ou plus)
          </label>
          <label className="flex gap-1">
            <input
              type="radio"
              name="buyChoice"
              value="full"
              checked={formData.buyChoice === "full"}
              onChange={() => handleBuyChoice("full")}
            />
            Bouteille
          </label>
        </div>
      );
    }

    if (saleOptions === "divided") {
      return (
        <div className="flex gap-2 rounded-xl border-2 bg-black px-4 py-2 text-white">
          <label className="flex gap-1">
            <input
              type="radio"
              name="buyChoice"
              value="divided"
              checked={formData.buyChoice === "divided"}
              onChange={() => handleBuyChoice("divided")}
            />
            Division (10mL ou plus)
          </label>
        </div>
      );
    }

    if (saleOptions === "full") {
      return (
        <div className="flex gap-2 rounded-xl border-2 bg-black px-4 py-2 text-white">
          <label className="flex gap-1">
            <input
              type="radio"
              name="buyChoice"
              value="full"
              checked={formData.buyChoice === "full"}
              onChange={() => handleBuyChoice("full")}
            />
            Bouteille
          </label>
        </div>
      );
    }
  };

  const getDeliveryPrice = () => {
    if (!formData.wilaya || !formData.deliveryType) return 0;

    const selectedWilaya = wilayas.find((w) => w.name === formData.wilaya);
    if (!selectedWilaya) return 0;

    const basePrice = 500;
    const multiplier = formData.deliveryType === "home" ? 1.5 : 1;

    return (basePrice + selectedWilaya.number * 10) * multiplier;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    await axios.post(
      "/api/sendMessage",
      JSON.stringify({
        productName: product.name,
        deliveryPrice: getDeliveryPrice(),
        orderPrice: orderPrice,
        formData: formData,
      }),
    );
    handleClosePopup();
  };

  const availableCounties =
    selectedWilaya !== null ? wilayas[selectedWilaya].counties : [];

  return (
    <div className="flex flex-col">
      <button
        onClick={handleOrderClick}
        className="relative mx-10 mt-6 w-full p-[3px]"
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
        <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
          Commander
        </div>
      </button>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[90%] max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="flex justify-end">
              <button onClick={handleClosePopup}>
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <h2 className="mb-4 text-center text-2xl font-bold">
              Commander: {product.name}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex max-h-[80vh] flex-col gap-4 overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold" htmlFor="name">
                  Nom et Prénom
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border p-2"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold" htmlFor="phone">
                  Numéro de téléphone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Votre téléphone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border p-2"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold" htmlFor="buyChoice">
                  Type d&apos;Achat
                </label>
                <div>{getSalesOption()}</div>
                {formData.buyChoice === "divided" && (
                  <div className="flex flex-col gap-2">
                    <label className="text-lg font-bold" htmlFor="divisionQty">
                      Quantité
                    </label>
                    <select
                      name="divisionQty"
                      value={formData.divisionQty}
                      onChange={handleInputChange}
                      className="w-full rounded-md border p-2"
                    >
                      <option value={10}>10 mL</option>
                      <option value={20}>20 mL</option>
                      <option value={30}>30 mL</option>
                      <option value={40}>40 mL</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold" htmlFor="wilaya">
                  Wilaya
                </label>
                <select
                  name="wilaya"
                  value={formData.wilaya}
                  onChange={(e) => {
                    const selectedWilayaName = e.target.value;
                    const selectedIndex = wilayas.findIndex(
                      (w) => w.name === selectedWilayaName,
                    );

                    setFormData({
                      ...formData,
                      wilaya: selectedWilayaName,
                      county: "",
                    });
                    setSelectedWilaya(selectedIndex);
                  }}
                  className="w-full rounded-md border p-2"
                  required
                >
                  <option value="">Sélectionner Wilaya</option>
                  {wilayas.map((wilaya) => (
                    <option key={wilaya.number} value={wilaya.name}>
                      {wilaya.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold" htmlFor="county">
                  Commune
                </label>
                <select
                  name="county"
                  value={formData.county}
                  onChange={handleInputChange}
                  className="w-full rounded-md border p-2"
                  required
                  disabled={!availableCounties.length}
                >
                  <option value="">Sélectionner Commune</option>
                  {availableCounties.map((county, index) => (
                    <option key={index} value={county}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold">Type de Livraison</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="stopdesk"
                      checked={formData.deliveryType === "stopdesk"}
                      onChange={handleInputChange}
                      required
                    />
                    Point Relais (Stop Desk)
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="home"
                      checked={formData.deliveryType === "home"}
                      onChange={handleInputChange}
                      required
                    />
                    Livraison à Domicile
                  </label>
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Facturation</h1>
                <div className="my-auto flex flex-col gap-2 rounded-2xl border-2 bg-black p-2 text-white">
                  <div className="flex gap-2 text-2xl">
                    <span>Prix de livraison: </span>
                    <span className="font-bold">{getDeliveryPrice()} DA</span>
                  </div>
                  <div className="flex gap-2 text-2xl">
                    <span>Prix d&apos;Achat: </span>
                    <span className="font-bold">{orderPrice} DA</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <h1 className="text-2xl font-bold">Total</h1>
                <div className="text-3xl font-bold text-red-500">
                  {typeof getDeliveryPrice() === "number"
                    ? orderPrice + getDeliveryPrice()
                    : "N/A"}{" "}
                  DA
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="rounded-md bg-gray-300 px-4 py-2"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                  className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-green-600"
                >
                  Confirmer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
