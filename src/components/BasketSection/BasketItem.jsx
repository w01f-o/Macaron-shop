import BasketEditor from "../Product/BasketEditor";
import { useContext } from "react";
import { MyContext } from "../../utils/Context";

const BasketItem = ({ id, name, description, price, isDiscount, img }) => {
  const { basket, deleteProduct } = useContext(MyContext);
  const productIndex = basket.findIndex((product) => id === product.id);
  const productCount = basket[productIndex].count;

  return (
    <article className="basket__item">
      <div className="basket__item-img">
        <img src={img} alt={name} className="basket__item-pic" />
      </div>
      <div className="basket__item-info">
        <div className="basket__item-name">{name}</div>
        <div className="basket__item-description">{description}</div>
      </div>
      <BasketEditor id={id} productIndex={productIndex} />
      <div className="basket__item-price">
        Цена: <em>{price * productCount} руб.</em>
      </div>
      <button className="basket__item-delete" onClick={() => deleteProduct(id)}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M12 1.41405L10.5859 0L5.99998 4.58593L1.41405 0L0 1.41405L4.58593 5.99998L0 10.5859L1.41405 12L5.99998 7.41407L10.5859 12L12 10.5859L7.41407 5.99998L12 1.41405Z"
            fill="#292929"
          />
        </svg>
      </button>
    </article>
  );
};

export default BasketItem;
