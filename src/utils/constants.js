import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const products_mock = [
  {
    id: 1,
    name: "Koncert 1",
    description: "Koncert nekog benda koji jako dobro svira, bice LUDNICA!!!",
    capacity: 600,
    date: "12-03-2022",
    time: "8pm",
    vacantSeats: 10,
    stars: 4.9,
    category: "concert",
  },
  {
    id: 2,
    name: "Koncert 2",
    description: "Koncert nekog benda koji jako dobro svira, bice LUDNICA!!!",
    capacity: 500,
    date: "13-03-2022",
    time: "7pm",
    vacantSeats: 22,
    stars: 4.4,
    category: "concert",
  },
  {
    id: 3,
    name: "Predstava 3",
    description: "Koncert nekog benda koji jako dobro svira, bice LUDNICA!!!",
    capacity: 443,
    date: "19-03-2022",
    time: "7pm",
    vacantSeats: 33,
    stars: 4.4,
    category: "theatre",
  },
  {
    id: 4,
    name: "Film 4",
    description: "Koncert nekog benda koji jako dobro svira, bice LUDNICA!!!",
    capacity: 120,
    date: "13-06-2022",
    time: "9pm",
    vacantSeats: 100,
    stars: 4.0,
    category: "cinema",
  },
  {
    id: 5,
    name: "Koncert 5",
    description: "Koncert nekog benda koji jako dobro svira, bice LUDNICA!!!",
    capacity: 222,
    date: "13-03-2022",
    time: "7pm",
    vacantSeats: 22,
    stars: 4.4,
    category: "concert",
  },
];

export const ticketTypes = [
  {
    id: 1,
    type: "adult1",
    price: 21,
    productId: 1,
  },
  {
    id: 2,
    type: "kids1",
    price: 11,
    productId: 1,
  },
  {
    id: 3,
    type: "adult2",
    price: 22,
    productId: 2,
  },
  {
    id: 4,
    type: "kids2",
    price: 12,
    productId: 2,
  },
  {
    id: 5,
    type: "adult3",
    price: 23,
    productId: 3,
  },
  {
    id: 6,
    type: "kids3",
    price: 13,
    productId: 3,
  },
  {
    id: 7,
    type: "adult4",
    price: 24,
    productId: 4,
  },
  {
    id: 8,
    type: "kids4",
    price: 14,
    productId: 4,
  },
  {
    id: 9,
    type: "adult5",
    price: 25,
    productId: 5,
  },
  {
    id: 10,
    type: "kids5",
    price: 15,
    productId: 5,
  },
];

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
