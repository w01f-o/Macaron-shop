import productsData from "../../data/products/productsData";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import Product from "../Product/Product";

const Popular = () => {
  return (
    <section className="popular">
      <Container>
        <Row className="popular__row">
          <SectionTitle style={{ marginBottom: "42px" }}>
            Популярные наборы
          </SectionTitle>
          {productsData.map((item) =>
            item.id <= 6 ? (
              <Col xxl={4} key={item.id}>
                <Product {...item} />
              </Col>
            ) : (
              ""
            ),
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Popular;
