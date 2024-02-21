import { createContext, useEffect, useState } from "react";
export const MyContext = createContext(undefined);

const MyContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [basketCount, setBasketCount] = useState(0);
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);
  const [discount, setDiscount] = useState();

  const addBasket = (product) => {
    setBasket((prev) => [
      ...prev,
      {
        ...product,
        count: 1,
      },
    ]);
  };

  const plusOneBasket = (id) => {
    setBasket((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      }),
    );
  };

  const minusOneBasket = (id) => {
    if (basket.find((item) => item.id === id).count === 1) {
      deleteProduct(id);
    } else {
      setBasket((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        }),
      );
    }
  };

  const deleteProduct = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  const delivery = 400;

  useEffect(() => {
    if (localStorage.getItem("basket") !== null) {
      setBasket(JSON.parse(localStorage.getItem("basket")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    setBasketCount(basket.reduce((sum, item) => sum + item.count, 0));
    setBasketTotalPrice(
      basket.reduce((sum, item) => sum + item.count * item.price, 0),
    );
  }, [basket]);

  const promoCodes = ["2024", "qwerty", "123"];

  const paths = [
    {
      pageName: "Главная",
      path: "/",
    },
    {
      pageName: "Корзина",
      path: "/basket",
    },
    {
      pageName: "Гарантии вкуса и качества",
      path: "/warranty",
    },
    {
      pageName: "Доствка и оплата",
      path: "/delivery",
    },
    {
      pageName: "Контакты",
      path: "/contacts",
    },
  ];

  const value = {
    basket,
    setBasket,
    addBasket,
    plusOneBasket,
    minusOneBasket,
    basketCount,
    basketTotalPrice,
    deleteProduct,
    discount,
    delivery,
    setDiscount,
    promoCodes,
    paths,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
