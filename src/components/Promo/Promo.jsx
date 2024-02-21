import { Col, Container, Row } from "react-bootstrap";
import promoPicture from "./img/img (1).png";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__blur-item blur-item1"></div>
      <div className="promo__blur-item blur-item2"></div>
      <div className="promo__blur-item blur-item3"></div>
      <div className="promo__blur-item blur-item4"></div>
      {/*<div className="promo__blur-item blur-item5"></div>*/}
      <div className="promo__blur-item blur-item6"></div>
      <div className="promo__blur-item blur-item7"></div>
      <Container>
        <Row className="promo__row">
          <Col xxl={6}>
            <div className="promo__image">
              <img src={promoPicture} alt="promo" className="promo__pic" />
            </div>
          </Col>
          <Col xxl={6} className="d-flex flex-column justify-content-center">
            <div className="promo__logo">
              <div className="promo__logo-name">Macaronshop</div>
              <div className="promo__logo-year">since 2013</div>
            </div>
            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
            <h2 className="promo__title">Настоящая любовь</h2>
            <p className="promo__description">
              Пирожные макарон и другие десерты <br />
              из натуральных ингредиентов, приготовленные с <br /> любовью
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promo;
