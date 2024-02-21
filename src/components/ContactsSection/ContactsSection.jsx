import { Col, Container, Row } from "react-bootstrap";
import Links from "../Links/Links";
import contactsImg from "./img/Group 207.png";

const ContactsSection = () => {
  return (
    <section className="contacts">
      <Container>
        <Links pages={[{ name: "Контакты", path: "/contacts" }]} />
        <Row className="contacts__row">
          <Col xxl={6}>
            <div className="contacts__img">
              <img
                src={contactsImg}
                alt="contactsImg"
                className="contacts__pic"
              />
            </div>
          </Col>
          <Col xxl={6}>
            <div className="contacts__wrapper">
              <h1 className="contacts__title">Контакты</h1>
              <div className="contacts__item">
                <h4 className="contacts__item-title">Производство</h4>
                <p className="contacts__item-text">
                  Маршала Тухачевского, 22 <br />
                  Время работы: с 8 до 19:30.
                </p>
              </div>
              <div className="contacts__item">
                <h4 className="contacts__item-title">Пункты самовывоза:</h4>
                <p className="contacts__item-text">
                  Кафе “Морошка”. Маршала Тухачевского, 22 <br />
                  (с 8 до 19:30) <br /> <br />
                  Кафе “Мята”. Наб канала Грибоедова, 37 <br />
                  (с 10 до 22)
                </p>
              </div>
              <div className="contacts__item">
                <h4 className="contacts__item-title">Телефоны:</h4>
                <p className="contacts__item-text">
                  8 (812) 309-82-88 основной номер <br /> <br />8 (981)
                  841-85-25 для жалоб и предложений
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactsSection;
