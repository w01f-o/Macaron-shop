const WarrantyItem = ({ text, img }) => {
  return (
    <article className="warranty__item">
      <div className="warranty__img">
        <img src={img} alt="warrantyImg" className="warranty__pic" />
      </div>
      <p className="warranty__text">{text}</p>
    </article>
  );
};

export default WarrantyItem;
