import { useContext } from "react";
import { MyContext } from "../../utils/Context";

const BasketEditor = ({ id, productIndex }) => {
  const { basket, plusOneBasket, minusOneBasket } = useContext(MyContext);

  return (
    <div className="product__edit-wrapper">
      <button
        className="product__edit-button"
        type="button"
        onClick={() => minusOneBasket(id)}
      >
        <svg
          width="6"
          height="2"
          viewBox="0 0 6 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="6" height="2" fill="black" />
        </svg>
      </button>
      <div className="product__edit-count">{basket[productIndex].count}</div>
      <button
        className="product__edit-button"
        type="button"
        onClick={() => plusOneBasket(id)}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" width="2" height="10" fill="black" />
          <rect y="4" width="10" height="2" fill="black" />
        </svg>
      </button>
    </div>
  );
};

export default BasketEditor;
