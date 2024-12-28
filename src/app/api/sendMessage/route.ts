import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


async function POST(req: NextRequest) {
  const body = (await req.json());
  console.log(body);
  const message = `
    Nouveau Commande:
    Produit: ${body.productName}
    Nom: ${body.formData.name}
    Téléphone: ${body.formData.phone}
    Type d'achat: ${body.formData.buyChoice === "full" ? "Bouteille" : "Division"}
    Quantité: ${body.formData.divisionQty} mL
    Wilaya: ${body.formData.wilaya}
    Commune: ${body.formData.county}
    Prix d'achat: ${body.orderPrice} DA
    Type de Livraison: ${body.formData.deliveryType}
    Prix de livraison: ${body.deliveryPrice} DA
    Total: ${body.orderPrice + body.deliveryPrice} DA
  `;

  console.log("Sending message to Telegram...");

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      },
    );
    console.log("Message sent to Telegram:", response.data);
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
  return new NextResponse("Checkout Successful", { status: 200 });
};

export { POST };