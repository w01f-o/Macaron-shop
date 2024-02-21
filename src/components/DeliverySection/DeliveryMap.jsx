import { Container, Row } from "react-bootstrap";

const DeliveryMap = () => {
  return (
    <section className="delivery__map">
      <Container>
        <Row>
          <div className="delivery__map-wrapper">
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A013470c4e95e993005764a277d9b555d735535ced28e76cf4f2c969e84b8fe77&amp;source=constructor"></iframe>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default DeliveryMap;
