import { Container, Row } from "react-bootstrap";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SectionTitle from "../SectionTitle/SectionTitle";
import StocksItem from "./StocksItem";
import stocksData from "../../data/stocks/stocks";
const StocksSection = () => {
  return (
    <section className="stocks">
      <Container>
        <Row className="stocks__row">
          <SectionTitle>Акции</SectionTitle>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
          >
            {stocksData.map((item) => (
              <SwiperSlide key={item.id}>
                <StocksItem
                  title={item.title}
                  text={item.text}
                  img={item.img}
                  type={item.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="stocks__swiper-pagination">
            <span className="stocks__swiper-pagination-bullet active"></span>
            <span className="stocks__swiper-pagination-bullet"></span>
            <span className="stocks__swiper-pagination-bullet"></span>
            <span className="stocks__swiper-pagination-bullet"></span>
            <span className="stocks__swiper-pagination-bullet"></span>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default StocksSection;
