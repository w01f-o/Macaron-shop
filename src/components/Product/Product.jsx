import { useContext } from "react";
import { MyContext } from "../../utils/Context";
import BasketEditor from "./BasketEditor";

const Product = ({ id, name, description, price, isDiscount, img }) => {
  const { basket, addBasket } = useContext(MyContext);
  const productIndex = basket.findIndex((product) => id === product.id);
  const inBasket = productIndex > -1;

  return (
    <article className="product">
      <div className="product__image">
        <img src={img} alt={name} className="product__pic" />
      </div>
      <div className="product__inner">
        <div className="product__about">
          <div className="product__name">{name}</div>
          <div className="product__description">{description}</div>
        </div>
        <div className="product__price">
          {`${inBasket ? price * basket[productIndex].count : price} руб`}
        </div>
        {inBasket ? (
          <BasketEditor id={id} productIndex={productIndex} />
        ) : (
          <button
            className="product__button"
            type="button"
            onClick={() =>
              addBasket({ name, description, id, price, isDiscount, img })
            }
          >
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2911 5.37109H1V20.0002H14.2911V5.37109Z"
                stroke="black"
                strokeWidth="1.4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.12207 7.15493V3.40845C4.12207 2.07042 5.10329 1 6.26292 1H9.02818C10.1878 1 11.169 2.07042 11.169 3.40845V7.15493"
                stroke="black"
                strokeWidth="1.4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            В корзину
          </button>
        )}
      </div>
    </article>
  );
};

export default Product;
