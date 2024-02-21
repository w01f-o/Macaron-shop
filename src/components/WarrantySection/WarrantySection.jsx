import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import warrantyData from "../../data/warranty/warrantyData";
import WarrantyItem from "./WarrantyItem";
import Links from "../Links/Links";

const WarrantySection = () => {
  return (
    <section className="warranty">
      <Container>
        <Links
          pages={[{ name: "Гарантии вкуса и качества", path: "/warranty" }]}
        />
        <Row className="warranty__row">
          <SectionTitle>Гарантии вкуса и качества</SectionTitle>
          <h4 className="warranty__description">
            При изготовлении пирожных мы используем только натуральные <br />
            ингредиенты, избегая использования конвер
          </h4>
          {warrantyData.map((item, index) => (
            <Col xxl={4} key={index}>
              <WarrantyItem text={item.text} img={item.img} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WarrantySection;
