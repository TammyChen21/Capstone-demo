import Heading from "../components/Heading";
import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import { useState } from "react";

// write example productData
const PRODUCT_DATA = [
  {
    id: "1",
    image: "../img/1.jpeg",
    title: "HAPE Puppenhaus aus Holz",
    description: "Wohnzimmer, Küche, Bad, Schlafzimmer, Balkon...",
    price: "50,00€",
  },

  {
    id: "2",
    image: "../img/2.jpeg",
    title: "Sophie La Girafe Lernspielzeug",
    description:
      "Diverses Spielzeug wie Beißring Rassel Spiegel Nachziehtier Quietsche Püppchen ",
    price: "10,00€",
  },
  {
    id: "3",
    image: "../img/3.jpeg",
    title: "Baby Greifling",
    description:
      "Personalisiertes Babygreifling - 100% Baumwolle - verschiedene Farben verfügbar - handmade",
    price: "4,50€",
  },

  {
    id: "4",
    image: "../img/4.jpeg",
    title: "Micky Maus!",
    description: "Großes Micky Maus Plüschtier",
    price: "15,00€",
  },

  {
    id: "5",
    image: "../img/5.jpeg",
    title: "Playmobil 5529 Tierarztpraxis",
    description: "Wir verkaufen die Tierarztpraxis von Playmobil. ",
    price: "20,00€",
  },

  {
    id: "6",
    image: "../img/6.jpeg",
    title: "Einhorn Motiv pyjamas F&F Gr. 116/5-6 Jahre",
    description: "Top zustand, super 100% Baumwolle.F&F Marke aus England.",
    price: "7,00€",
  },

  {
    id: "7",
    image: "../img/7.jpeg",
    title: "Schnuffelhase / Schmusetuch",
    description: "Schnuffeltuch ca 30 x 30 cm Musselin ",
    price: "11,00€",
  },

  {
    id: "8",
    image: "../img/8.jpeg",
    title: "Gehäckelte Haarspange",
    description: "Einzeln 3€, Paar 5€",
    price: "5,00€",
  },

  {
    id: "9",
    image: "../img/9.jpeg",
    title: "Baby Spielzeug - großes Paket",
    description: "Verkaufe viele Baby Spielsachen im Paket.",
    price: "10,00€",
  },

  {
    id: "10",
    image: "../img/10.jpeg",
    title: "Blumen dunkel handmade Set",
    description:
      "Neues handmade Set aus biojersey bestehend aus einem loopschal der beidseitig getragen werden kann",
    price: "13,00€",
  },

  {
    id: "11",
    image: "../img/11.jpeg",
    title: "Baby Weste",
    description: "Größe 74",
    price: "10,00€",
  },

  {
    id: "12",
    image: "../img/12.jpeg",
    title: "Set Leggins Hoodie",
    description: "süßes Set",
    price: "10,00€",
  }
];

export default function HomePage() {
  const [productData, setProductData] = useState(PRODUCT_DATA);

  return (
    <>
      <Layout />
      <ProductGallery productData={productData} />
    </>
  );
}
