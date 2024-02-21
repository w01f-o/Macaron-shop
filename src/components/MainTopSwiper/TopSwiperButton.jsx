import { useSwiper } from "swiper/react";

const TopSwiperButton = ({ direction }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`topswiper__btn${direction === "prev" ? "-prev" : "-next"} topswiper__btn`}
      onClick={() =>
        direction === "prev" ? swiper.slidePrev() : swiper.slideNext()
      }
      type={"button"}
    >
      {direction === "prev" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="10"
          fill="none"
        >
          <path
            fill="#292929"
            fillOpacity=".8"
            d="M5.818 10 7 8.833 3.115 5 7 1.167 5.818 0 .75 5l5.068 5Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="10"
          fill="none"
        >
          <path
            fill="#292929"
            fillOpacity=".8"
            d="M1.182 0 0 1.167 3.885 5 0 8.833 1.182 10 6.25 5 1.182 0Z"
          />
        </svg>
      )}
    </button>
  );
};

export default TopSwiperButton;
