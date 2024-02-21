import img1 from "./img/Rectangle 172.jpg";
import img2 from "./img/Rectangle 174.jpg";
import img3 from "./img/Rectangle 176.jpg";
import img4 from "./img/Rectangle 282.jpg";
import img5 from "./img/Rectangle 283.jpg";
import img6 from "./img/Rectangle 284.jpg";
import img7 from "./img/Rectangle 282 (1).jpg";
import img8 from "./img/Rectangle 282 (2).jpg";
import img9 from "./img/Rectangle 282 (3).jpg";
import img10 from "./img/Rectangle 282 (4).jpg";

const productsData = [
  {
    id: 1,
    name: "Сердце",
    description: "24 штуки в коробке в виде сердца.\nАссорти из 6 вкусов",
    price: 2800,
    isDiscount: false,
    img: img1,
  },
  {
    id: 2,
    name: "Красота спасёт мир ",
    description:
      "Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
    price: 750,
    isDiscount: false,
    img: img2,
  },
  {
    id: 3,
    name: "Круглый набор",
    description: "40 макаронс в круглой коробке с персональной надписью",
    price: 3900,
    isDiscount: false,
    img: img3,
  },
  {
    id: 4,
    name: "Набор на 9",
    description:
      "Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня",
    price: 950,
    isDiscount: false,
    img: img4,
  },
  {
    id: 5,
    name: "Набор на 16",
    description:
      "Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад",
    price: 1500,
    isDiscount: false,
    img: img5,
  },
  {
    id: 6,
    name: "Набор на 24",
    description:
      "Набор 24 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад",
    price: 2500,
    isDiscount: false,
    img: img6,
  },
  {
    id: 7,
    name: "Набор-комбо “С Днем рождения”",
    description: "3 макаронс + 4 эклера в коробке. Вкусы: ассорти",
    price: 1260,
    isDiscount: true,
    newPrice: 1190,
    img: img7,
  },
  {
    id: 8,
    name: "Пасхальный набор макаронс",
    description: "20 штук в коробке. Вкусы: ассорти.",
    price: 1190,
    isDiscount: false,
    img: img8,
  },
  {
    id: 9,
    name: "Подарочный набор ко Дню свадьбы",
    description: "12 макаронс в коробке. Вкусы: ассорти",
    price: 1260,
    isDiscount: true,
    newPrice: 1190,
    img: img9,
  },
  {
    id: 10,
    name: "Пасхальный набор “Светлой Пасхи”",
    description: "12 штук в коробке. Вкусы: ассорти.",
    price: 2500,
    isDiscount: false,
    img: img10,
  },
];

export default productsData;
