import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import coockie from "./img/Group 347.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Error404 = () => {
  return (
    <Container>
      <Row className="error404__row">
        <Col xxl={12}>
          <div className="error404__text">Извините, страница не найдена</div>
          <div className="error404__error-code">
            <span>404</span>
            <div className="error404__image">
              <img src={coockie} alt="" className="error404__pic" />
            </div>
          </div>
          <Link to="/" className="error404__link">
            <PrimaryButton className="error404__btn">На главную</PrimaryButton>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
