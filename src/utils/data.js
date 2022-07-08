import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";

export const foodData = [
  {
    id: 1,
    name: "Dondurma",
    desc: "Çikolata & çilek",
    price: "5.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Çilek",
    desc: "Taze çilek",
    price: "10.25",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Tavuk ve garnitür",
    desc: "Karışık tavuk ve garnitür",
    price: "8.25",
    imageSrc: C3,
  },
];

export const categories = [
  {
    id: 1,
    name: "Tavuk",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Kırmızı Et",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Balık",
    urlParamName: "fish",
  },
  {
    id: 4,
    name: "Tatlı",
    urlParamName: "icecreams",
  },

  {
    id: 5,
    name: "İçecekler",
    urlParamName: "drinks",
  },
];
