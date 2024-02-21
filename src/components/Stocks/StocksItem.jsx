const StocksItem = ({ title, text, img, type }) => {
  return (
    <article className="stocks__card">
      <div className="stocks__card-img">
        <img src={img} alt="" className="stocks__card-pic" />
      </div>
      <h6
        className={`stocks__card-title ${type === "free-delivery" ? "blue" : "red"}`}
      >
        {title}
      </h6>
      <div
        className={`stocks__card-text ${type === "free-delivery" ? "blue" : "red"}`}
      >
        {text}
      </div>
    </article>
  );
};

export default StocksItem;
