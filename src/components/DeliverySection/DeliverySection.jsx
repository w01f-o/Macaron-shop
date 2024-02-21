import { Col, Container, Row } from "react-bootstrap";
import Links from "../Links/Links";
import deliveryImg from "./img/Group 351.png";
import deliveryImg2 from "./img/Group 353.png";
import DeliveryMap from "./DeliveryMap";

const DeliverySection = () => {
  return (
    <section className="delivery">
      <Container>
        <Links pages={[{ name: "Доставка и оплата", path: "/delivery" }]} />
        <Row className="delivery__row">
          <Col xxl={6}>
            <div className="delivery__img">
              <img
                src={deliveryImg}
                alt="deliveryImg"
                className="delivery__pic"
              />
            </div>
          </Col>
          <Col xxl={6}>
            <h1 className="delivery__title">Доставка и оплата</h1>
            <p className="delivery__description">
              Для наших покупателей доступны 2 способа доставки: <br />
              <strong>курьерская доставка </strong>по Санкт-Петербургу в
              пределах <br />
              КАД и <strong>самовывоз</strong>.
            </p>
            <h3 className="delivery__secondary-title">Курьерская доставка</h3>
            <p className="delivery__text">
              Курьеры работают каждый день с 11 до 21 часа. <br />
              Доставка макарон осуществляется только по <br />
              Санкт-Петербургу в пределах кольцевой автомобильной <br />
              дороги (КАД).
              <em>Точная зона доставки</em>. <br /> <br /> Если Вы готовы
              принять заказ в интервале с 12 до 17 часов <br />
              или с 17 до 21 часа, то доставка будет стоить 400 рублей. <br />
              <br />
              При заказе от 3000 рублей доставка БЕСПЛАТНАЯ. <br />
              <br />
              При оформлении заказа до 15 часов возможна доставка <br />в тот же
              день в промежутке с 17 до 21 часа. <br />
              <br />
              Курьер предупредит Вас о своём прибытии за 30-40 минут.
            </p>
          </Col>
          <Row style={{ paddingTop: "168px" }}>
            <Col xxl={6}>
              <h3 className="delivery__secondary-title">Самовывоз</h3>
              <div className="delivery__text">
                Вы можете сделать заказ и забрать его самостоятельно с <br />
                нашего производства по адресу: ул. Маршала Тухачевского 22
                <br />
                БЦ "Сова" <br />
                <br />
                Заказ необходимо сделать до 20 часов, чтобы забрать его на{" "}
                <br />
                следующий день в пункте самовывоза в любое удобное время
                <br />
                в промежутке с 13 до 22 часов. <br />
                <br />
                Оплатить заказ банковской картой можно заранее при <br />
                оформлении. Непосредственно при получении банковской <br />
                картой расплатиться нельзя.
              </div>
              <h3
                className="delivery__secondary-title"
                style={{ marginTop: "32px" }}
              >
                Оплата
              </h3>
              <div className="delivery__text" style={{ paddingBottom: "92px" }}>
                Вы можете оплатить заказ при получении наличными или <br />
                заранее оплатить заказ банковской картой. <br />
                Для этого укажите выбранный способ при оформлении <br />
                заказа. <br />
                <br />
                Оплата банковской картой удобна, если вы хотите отправить <br />
                десерты в подарок или не желаете возиться с наличными при <br />
                получении заказа. <br /> <br />
                Если у Вас нет карты российского банка, мы можем принять <br />
                оплату через платёжную систему PayPal.
              </div>
            </Col>
            <Col xxl={6}>
              <div className="delivery__img" style={{ alignItems: "center" }}>
                <img
                  src={deliveryImg2}
                  alt="deliveryImg"
                  className="delivery__pic"
                />
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default DeliverySection;
