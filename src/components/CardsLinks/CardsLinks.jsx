import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const CardsLinks = () => {
  return (
    <section className="cards-links">
      <Container>
        <Row className="cards-links__row">
          <Col xxl={6} style={{ marginBottom: "25px" }}>
            <Link to="/ready-made-kits" className="cards-links__link">
              <div className="cards-links__inner" id="card-link1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="none"
                  className="cards-links__svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#fff" />
                  <path
                    fill="#F4976E"
                    d="M77.562 22.438v55.124H22.438V22.438h55.124Zm0-1.529H22.438c-.84 0-1.529.688-1.529 1.53v55.123c0 .84.688 1.529 1.53 1.529h55.123c.84 0 1.529-.688 1.529-1.53V22.439c0-.84-.688-1.529-1.53-1.529Z"
                  />
                  <path
                    fill="#F4976E"
                    d="M50.803 37.806c0-.612-.23-1.147-.612-1.53.383-.382.612-.917.612-1.529 0-1.07-.688-1.911-1.606-2.217a7.787 7.787 0 0 0-7.645-6.193h-6.04c-3.746 0-6.881 2.676-7.57 6.193a2.319 2.319 0 0 0-1.605 2.217c0 .612.23 1.147.612 1.53a2.135 2.135 0 0 0-.612 1.529c0 1.07.689 1.91 1.606 2.217.688 3.593 3.9 6.193 7.569 6.193h6.04c3.67 0 6.88-2.676 7.569-6.193.994-.306 1.682-1.224 1.682-2.217Zm-15.291-9.94h6.04c2.829 0 5.275 1.912 5.963 4.588h-.306l-.152-.153a2.09 2.09 0 0 0-1.453-.612h-.459c-.535 0-1.07.23-1.452.612a.584.584 0 0 1-.383.153h-.458a.584.584 0 0 1-.383-.153 2.09 2.09 0 0 0-1.452-.612h-.46c-.534 0-1.07.23-1.452.612a.584.584 0 0 1-.382.153h-.459a.584.584 0 0 1-.382-.153 2.089 2.089 0 0 0-1.453-.612h-.458c-.535 0-1.07.23-1.453.612a.584.584 0 0 1-.382.153h-.459a.584.584 0 0 1-.382-.153 2.09 2.09 0 0 0-1.453-.612h-.459c-.535 0-1.07.23-1.452.612l-.153.153h-.306c.765-2.676 3.211-4.588 6.04-4.588Zm-6.881 6.117h1.835l.612-.612a.584.584 0 0 1 .382-.153h.459c.152 0 .305.077.382.153.382.383.917.612 1.453.612h.458c.535 0 1.07-.23 1.453-.612a.584.584 0 0 1 .382-.153h.459c.153 0 .306.077.382.153.382.383.918.612 1.453.612h.459c.535 0 1.07-.23 1.452-.612a.584.584 0 0 1 .382-.153h.46c.152 0 .305.077.381.153.383.383.918.612 1.453.612h.459c.535 0 1.07-.23 1.452-.612a.584.584 0 0 1 .383-.153h.458c.153 0 .306.077.383.153l.611.612h1.835c.459 0 .765.306.765.764 0 .46-.306.765-.765.765H28.631c-.459 0-.765-.306-.765-.765 0-.458.306-.764.765-.764Zm0 3.058h19.878c.459 0 .765.306.765.765 0 .458-.306.764-.765.764H28.631c-.459 0-.765-.306-.765-.764 0-.46.306-.765.765-.765Zm12.92 7.646h-6.04c-2.828 0-5.274-1.912-5.963-4.588h18.044c-.765 2.676-3.211 4.588-6.04 4.588ZM72.057 60.054c-.688-3.594-3.9-6.193-7.569-6.193h-6.04c-3.67 0-6.88 2.676-7.569 6.193a2.32 2.32 0 0 0-1.605 2.217c0 .611.229 1.147.611 1.529a2.135 2.135 0 0 0-.611 1.529c0 1.07.688 1.911 1.605 2.217.688 3.593 3.9 6.193 7.57 6.193h6.04c3.669 0 6.88-2.676 7.568-6.193a2.319 2.319 0 0 0 1.606-2.217c0-.612-.23-1.147-.612-1.53.382-.381.612-.916.612-1.528.076-1.07-.612-1.912-1.606-2.217ZM58.448 55.39h6.04c2.829 0 5.275 1.911 5.964 4.587h-.306l-.153-.153a2.088 2.088 0 0 0-1.453-.611h-.459c-.535 0-1.07.229-1.452.611a.584.584 0 0 1-.382.153h-.46a.584.584 0 0 1-.381-.153 2.089 2.089 0 0 0-1.453-.611h-.459c-.535 0-1.07.229-1.452.611a.584.584 0 0 1-.383.153h-.458a.584.584 0 0 1-.383-.153 2.089 2.089 0 0 0-1.452-.611h-.46c-.534 0-1.07.229-1.452.611a.584.584 0 0 1-.382.153h-.459a.584.584 0 0 1-.382-.153 2.088 2.088 0 0 0-1.453-.611h-.458c-.535 0-1.07.229-1.453.611l-.153.153h-.306c.765-2.676 3.211-4.587 6.04-4.587Zm-6.88 6.116h1.834l.612-.611a.584.584 0 0 1 .382-.153h.459c.153 0 .306.076.382.153.382.382.918.611 1.453.611h.459c.535 0 1.07-.23 1.452-.611a.584.584 0 0 1 .382-.153h.46c.152 0 .305.076.381.153.383.382.918.611 1.453.611h.459c.535 0 1.07-.23 1.452-.611a.584.584 0 0 1 .383-.153h.458c.153 0 .306.076.383.153.382.382.917.611 1.452.611h.459c.535 0 1.07-.23 1.453-.611a.584.584 0 0 1 .382-.153h.459c.153 0 .305.076.382.153l.612.611h1.834c.46 0 .765.306.765.765s-.306.764-.764.764H51.566c-.458 0-.764-.305-.764-.764s.306-.765.764-.765Zm12.92 10.704h-6.04c-2.829 0-5.275-1.911-5.963-4.587h18.043c-.765 2.675-3.211 4.587-6.04 4.587Zm6.957-6.116H51.567c-.458 0-.764-.306-.764-.765s.306-.764.764-.764h19.878c.46 0 .765.305.765.764a.766.766 0 0 1-.764.765ZM39.946 50.88a2.319 2.319 0 0 0-2.217-1.606c-.611 0-1.147.23-1.529.612a2.135 2.135 0 0 0-1.529-.612c-1.07 0-1.911.688-2.217 1.605-3.594.689-6.193 3.9-6.193 7.57v6.04c0 3.67 2.676 6.88 6.193 7.568a2.319 2.319 0 0 0 2.217 1.606c.612 0 1.147-.23 1.53-.612.381.382.916.612 1.528.612 1.07 0 1.912-.688 2.217-1.606 3.594-.688 6.193-3.899 6.193-7.569v-6.04c.077-3.67-2.6-6.88-6.193-7.569Zm-12.08 13.608v-6.04c0-2.828 1.912-5.275 4.588-5.963v.306l-.153.153a2.089 2.089 0 0 0-.612 1.452v.46c0 .534.23 1.07.612 1.452.076.076.153.23.153.382v.459a.584.584 0 0 1-.153.382 2.089 2.089 0 0 0-.612 1.453v.458c0 .535.23 1.07.612 1.453.076.076.153.23.153.382v.459a.584.584 0 0 1-.153.382 2.088 2.088 0 0 0-.612 1.453v.459c0 .535.23 1.07.612 1.452.076.077.153.23.153.383v.458a.584.584 0 0 1-.153.383 2.089 2.089 0 0 0-.612 1.452v.459c0 .535.23 1.07.612 1.453l.153.152v.306c-2.676-.764-4.588-3.21-4.588-6.04Zm6.881 7.722c-.458 0-.764-.306-.764-.764V69.61l-.612-.612a.584.584 0 0 1-.153-.382v-.459c0-.153.077-.306.153-.382.383-.382.612-.918.612-1.453v-.458c0-.536-.23-1.07-.612-1.453a.584.584 0 0 1-.153-.382v-.46c0-.152.077-.305.153-.381.383-.383.612-.918.612-1.453v-.459c0-.535-.23-1.07-.612-1.452a.584.584 0 0 1-.153-.383v-.458c0-.153.077-.306.153-.383.383-.382.612-.917.612-1.452v-.459c0-.535-.23-1.07-.612-1.453a.584.584 0 0 1-.153-.382v-.459c0-.153.077-.305.153-.382l.612-.611v-1.835c0-.46.306-.765.764-.765.46 0 .765.306.765.765v19.878c0 .382-.382.764-.765.764Zm3.823-.764c0 .458-.306.764-.764.764-.46 0-.765-.306-.765-.764V51.568c0-.46.306-.765.765-.765.458 0 .764.306.764.765v19.878Zm6.117-6.958c0 2.83-1.912 5.276-4.588 5.964V52.485c2.676.688 4.588 3.135 4.588 5.964v6.04ZM67.47 27.943a2.319 2.319 0 0 0-2.217-1.606c-.612 0-1.147.23-1.53.612a2.135 2.135 0 0 0-1.529-.612c-1.07 0-1.911.689-2.217 1.606-3.593.688-6.193 3.9-6.193 7.569v6.04c0 3.67 2.676 6.88 6.193 7.569a2.319 2.319 0 0 0 2.217 1.605c.612 0 1.147-.229 1.53-.611.382.382.917.611 1.529.611 1.07 0 1.911-.688 2.217-1.605 3.593-.688 6.193-3.9 6.193-7.57v-6.04c.076-3.669-2.6-6.88-6.193-7.568ZM55.39 41.552v-6.04c0-2.829 1.911-5.275 4.587-5.963v18.043c-2.676-.765-4.587-3.211-4.587-6.04Zm6.88 7.722c-.458 0-.764-.306-.764-.765V28.631c0-.459.306-.765.765-.765s.764.306.764.765v19.878c0 .383-.382.765-.764.765Zm3.824-2.6v1.835c0 .459-.306.765-.765.765s-.764-.306-.764-.765V28.631c0-.459.305-.765.764-.765s.765.306.765.765v1.835l.611.612c.077.076.153.229.153.382v.459a.583.583 0 0 1-.153.382 2.09 2.09 0 0 0-.611 1.453v.458c0 .535.229 1.07.611 1.453.077.076.153.23.153.382v.459a.584.584 0 0 1-.153.382 2.09 2.09 0 0 0-.611 1.453v.459c0 .535.229 1.07.611 1.452.077.077.153.23.153.382v.46a.584.584 0 0 1-.153.381 2.089 2.089 0 0 0-.611 1.453v.459c0 .535.229 1.07.611 1.452.077.077.153.23.153.383v.458a.583.583 0 0 1-.153.383l-.611.611Zm6.116-5.122c0 2.829-1.911 5.275-4.587 5.963v-.306l.153-.152c.382-.383.611-.918.611-1.453v-.459c0-.535-.23-1.07-.611-1.452a.584.584 0 0 1-.153-.383v-.458c0-.153.076-.306.153-.383.382-.382.611-.917.611-1.452v-.46c0-.534-.23-1.07-.611-1.452a.584.584 0 0 1-.153-.382v-.459c0-.153.076-.306.153-.382.382-.382.611-.917.611-1.453v-.458c0-.535-.23-1.07-.611-1.453a.583.583 0 0 1-.153-.382v-.459c0-.153.076-.306.153-.382.382-.383.611-.918.611-1.453v-.459c0-.535-.23-1.07-.611-1.452l-.153-.153v-.306c2.676.688 4.587 3.135 4.587 5.963v6.117Z"
                  />
                </svg>
                <h5 className="cards-links__title">
                  <span>Готовые наборы</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="11"
                    fill="none"
                  >
                    <path
                      fill="#000"
                      d="M.693 4.348h12.942l-3.088-3.144a.714.714 0 0 1 0-.997.684.684 0 0 1 .98 0l4.27 4.347c.27.275.27.722 0 .997l-4.27 4.348a.684.684 0 0 1-.98 0 .714.714 0 0 1 0-.997l3.088-3.144H.693A.699.699 0 0 1 0 5.053c0-.39.31-.705.693-.705Z"
                    />
                  </svg>
                </h5>
                <p className="cards-links__text">
                  Готовые наборы со скидкой. <br />
                  Вы можете подобрать набор на подходящий случай.
                </p>
              </div>
            </Link>
          </Col>
          <Col xxl={6} style={{ marginBottom: "25px" }}>
            <Link to="/own-set" className="cards-links__link">
              <div className="cards-links__inner" id="card-link2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="none"
                  className="cards-links__svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#fff" />
                  <path
                    fill="#E67285"
                    d="M58.763 26.482c-.612-3.165-3.47-5.573-6.735-5.573h-5.374c-3.265 0-6.122 2.408-6.735 5.573-.884.275-1.496 1.032-1.496 1.995 0 .55.204 1.032.544 1.377-.34.344-.544.825-.544 1.376 0 .963.612 1.72 1.428 1.995.613 3.233 3.47 5.573 6.735 5.573h5.374c3.266 0 6.123-2.408 6.735-5.573a2.085 2.085 0 0 0 1.428-1.995c0-.55-.204-1.032-.544-1.377.34-.344.544-.825.544-1.376.069-.963-.544-1.72-1.36-1.995Zm-12.109-4.197h5.374a5.483 5.483 0 0 1 5.306 4.128h-.272l-.136-.137c-.34-.344-.748-.55-1.292-.55h-.408c-.477 0-.953.206-1.293.55a.516.516 0 0 1-.34.137h-.408a.516.516 0 0 1-.34-.137c-.34-.344-.749-.55-1.293-.55h-.408c-.476 0-.952.206-1.293.55a.516.516 0 0 1-.34.137h-.408a.516.516 0 0 1-.34-.137c-.34-.344-.748-.55-1.292-.55h-.409c-.476 0-.952.206-1.292.55a.516.516 0 0 1-.34.137h-.408a.516.516 0 0 1-.34-.137c-.34-.344-.749-.55-1.293-.55h-.408c-.477 0-.953.206-1.293.55l-.136.137h-.272c.68-2.408 2.857-4.128 5.374-4.128Zm-6.19 5.504h1.632l.545-.55c.136-.069.272-.138.34-.138h.408c.136 0 .272.07.34.138.34.344.816.55 1.293.55h.408c.476 0 .952-.206 1.292-.55.136-.069.272-.138.34-.138h.409c.136 0 .272.07.34.138.34.344.816.55 1.292.55h.408c.476 0 .953-.206 1.293-.55.136-.069.272-.138.34-.138h.408c.136 0 .272.07.34.138.34.344.817.55 1.293.55h.408c.476 0 .952-.206 1.292-.55.137-.069.273-.138.34-.138h.409c.136 0 .272.07.34.138l.544.55h1.633c.408 0 .68.276.68.688 0 .413-.272.688-.68.688H40.464c-.408 0-.68-.275-.68-.688 0-.412.34-.688.68-.688Zm11.564 9.633h-5.374a5.483 5.483 0 0 1-5.306-4.128h16.054c-.68 2.408-2.857 4.128-5.374 4.128Zm6.123-5.504H40.464c-.408 0-.68-.276-.68-.688 0-.413.272-.689.68-.689H58.15c.408 0 .68.276.68.689 0 .412-.272.688-.68.688ZM34.886 64.048c-.613-3.234-3.47-5.573-6.735-5.573h-5.374c-3.266 0-6.123 2.408-6.735 5.573-.884.275-1.497 1.032-1.497 1.995 0 .55.204 1.032.545 1.376-.34.344-.545.826-.545 1.376 0 .964.613 1.72 1.429 1.996.612 3.233 3.47 5.573 6.735 5.573h5.374c3.265 0 6.122-2.408 6.735-5.573a2.085 2.085 0 0 0 1.428-1.996c0-.55-.204-1.032-.544-1.376.34-.344.544-.825.544-1.376.068-.963-.544-1.72-1.36-1.995Zm-12.11-4.197h5.375a5.483 5.483 0 0 1 5.306 4.128h-.272l-.136-.137a1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.292.55a.517.517 0 0 1-.34.137h-.409a.517.517 0 0 1-.34-.137 1.848 1.848 0 0 0-1.292-.55h-.409c-.476 0-.952.206-1.292.55a.517.517 0 0 1-.34.137h-.408a.517.517 0 0 1-.34-.137 1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.293.55a.516.516 0 0 1-.34.137h-.408a.517.517 0 0 1-.34-.137 1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.292.55l-.136.137h-.272c.68-2.408 2.857-4.128 5.374-4.128Zm-6.19 5.504h1.633l.544-.55a.517.517 0 0 1 .34-.138h.408c.137 0 .273.07.34.138.34.344.817.55 1.293.55h.408c.476 0 .953-.206 1.293-.55a.517.517 0 0 1 .34-.138h.408c.136 0 .272.07.34.138.34.344.817.55 1.293.55h.408c.476 0 .952-.206 1.292-.55a.516.516 0 0 1 .34-.138h.409c.136 0 .272.07.34.138.34.344.816.55 1.292.55h.409c.476 0 .952-.206 1.292-.55a.517.517 0 0 1 .34-.138h.408c.136 0 .272.07.34.138l.545.55h1.632c.408 0 .68.275.68.688 0 .413-.272.688-.68.688H16.586c-.408 0-.68-.275-.68-.688 0-.413.272-.688.68-.688Zm11.497 9.633h-5.374a5.482 5.482 0 0 1-5.306-4.129h16.054c-.68 2.409-2.857 4.129-5.374 4.129Zm6.19-5.505H16.586c-.408 0-.68-.275-.68-.688 0-.412.272-.688.68-.688h17.687c.408 0 .68.276.68.688a.686.686 0 0 1-.68.688ZM58.967 64.048c-.612-3.234-3.47-5.573-6.735-5.573h-5.374c-3.265 0-6.122 2.408-6.735 5.573a2.085 2.085 0 0 0-1.428 1.995c0 .55.204 1.032.544 1.376-.34.344-.544.826-.544 1.376 0 .964.612 1.72 1.428 1.996.613 3.233 3.47 5.573 6.735 5.573h5.374c3.266 0 6.123-2.408 6.735-5.573a2.085 2.085 0 0 0 1.428-1.996c0-.55-.204-1.032-.544-1.376.34-.344.544-.825.544-1.376 0-.963-.612-1.72-1.428-1.995Zm-12.109-4.197h5.374a5.483 5.483 0 0 1 5.306 4.128h-.272l-.136-.137a1.848 1.848 0 0 0-1.292-.55h-.409c-.476 0-.952.206-1.292.55a.517.517 0 0 1-.34.137h-.408a.516.516 0 0 1-.34-.137 1.849 1.849 0 0 0-1.293-.55h-.408c-.476 0-.953.206-1.293.55a.517.517 0 0 1-.34.137h-.408a.517.517 0 0 1-.34-.137 1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.292.55a.516.516 0 0 1-.34.137h-.409a.517.517 0 0 1-.34-.137 1.848 1.848 0 0 0-1.292-.55h-.408c-.477 0-.953.206-1.293.55l-.136.137h-.272c.68-2.408 2.857-4.128 5.374-4.128Zm-6.19 5.504H42.3l.544-.55a.517.517 0 0 1 .34-.138h.409c.136 0 .272.07.34.138.34.344.816.55 1.292.55h.409c.476 0 .952-.206 1.292-.55a.517.517 0 0 1 .34-.138h.408c.136 0 .273.07.34.138.34.344.817.55 1.293.55h.408c.476 0 .953-.206 1.293-.55a.517.517 0 0 1 .34-.138h.408c.136 0 .272.07.34.138.34.344.817.55 1.293.55h.408c.476 0 .952-.206 1.292-.55a.517.517 0 0 1 .34-.138h.409c.136 0 .272.07.34.138l.544.55h1.633c.408 0 .68.275.68.688 0 .413-.272.688-.68.688H40.668c-.408 0-.68-.275-.68-.688 0-.413.34-.688.68-.688Zm11.564 9.633h-5.374a5.482 5.482 0 0 1-5.306-4.129h16.054c-.68 2.409-2.857 4.129-5.374 4.129Zm6.123-5.505H40.668c-.408 0-.68-.275-.68-.688 0-.412.272-.688.68-.688h17.687c.408 0 .68.276.68.688a.686.686 0 0 1-.68.688ZM83.049 64.048c-.612-3.234-3.47-5.573-6.735-5.573H70.94c-3.265 0-6.122 2.408-6.735 5.573a2.085 2.085 0 0 0-1.428 1.995c0 .55.204 1.032.544 1.376-.34.344-.544.826-.544 1.376 0 .964.612 1.72 1.428 1.996.613 3.233 3.47 5.573 6.735 5.573h5.374c3.266 0 6.123-2.408 6.735-5.573a2.085 2.085 0 0 0 1.428-1.996c0-.55-.204-1.032-.544-1.376.34-.344.544-.825.544-1.376.069-.963-.544-1.72-1.428-1.995ZM70.94 59.851h5.374a5.483 5.483 0 0 1 5.306 4.128h-.272l-.136-.137a1.848 1.848 0 0 0-1.292-.55h-.409c-.476 0-.952.206-1.292.55a.517.517 0 0 1-.34.137h-.408a.517.517 0 0 1-.34-.137 1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.953.206-1.293.55a.517.517 0 0 1-.34.137h-.408a.516.516 0 0 1-.34-.137 1.849 1.849 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.292.55a.517.517 0 0 1-.34.137h-.408a.517.517 0 0 1-.34-.137 1.848 1.848 0 0 0-1.293-.55h-.408c-.477 0-.953.206-1.293.55l-.136.137h-.272c.68-2.408 2.857-4.128 5.374-4.128Zm-6.122 5.504h1.632l.544-.55a.517.517 0 0 1 .34-.138h.409c.136 0 .272.07.34.138.34.344.816.55 1.293.55h.408c.476 0 .952-.206 1.292-.55a.517.517 0 0 1 .34-.138h.409c.135 0 .272.07.34.138.34.344.816.55 1.292.55h.408c.477 0 .953-.206 1.293-.55a.517.517 0 0 1 .34-.138h.408c.136 0 .272.07.34.138.34.344.817.55 1.293.55h.408c.476 0 .952-.206 1.292-.55a.517.517 0 0 1 .34-.138h.409c.136 0 .272.07.34.138l.544.55h1.633c.408 0 .68.275.68.688 0 .413-.272.688-.68.688H64.818c-.409 0-.68-.275-.68-.688 0-.413.271-.688.68-.688Zm11.496 9.633H70.94a5.482 5.482 0 0 1-5.306-4.129h16.054c-.68 2.409-2.857 4.129-5.374 4.129Zm6.19-5.505H64.819c-.409 0-.68-.275-.68-.688 0-.412.271-.688.68-.688h17.687c.408 0 .68.276.68.688 0 .344-.34.688-.68.688ZM46.926 45.265c-.612-3.233-3.469-5.573-6.734-5.573h-5.374c-3.266 0-6.123 2.408-6.735 5.573a2.084 2.084 0 0 0-1.429 1.996c0 .55.204 1.032.544 1.376-.34.344-.544.825-.544 1.376 0 .963.613 1.72 1.429 1.995.612 3.234 3.47 5.573 6.735 5.573h5.374c3.265 0 6.122-2.408 6.734-5.573a2.085 2.085 0 0 0 1.429-1.995c0-.55-.204-1.032-.544-1.376.34-.344.544-.826.544-1.376 0-.964-.612-1.79-1.429-1.996ZM34.818 41h5.374a5.483 5.483 0 0 1 5.306 4.128h-.272l-.136-.138a1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.293.55a.516.516 0 0 1-.34.138h-.408a.516.516 0 0 1-.34-.138 1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.292.55a.516.516 0 0 1-.34.138h-.408a.516.516 0 0 1-.34-.138 1.848 1.848 0 0 0-1.293-.55h-.408c-.477 0-.953.206-1.293.55a.516.516 0 0 1-.34.138h-.408a.516.516 0 0 1-.34-.138 1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.292.55l-.137.138h-.272C30.123 42.72 32.301 41 34.818 41Zm-6.19 5.504h1.632l.544-.55a.516.516 0 0 1 .34-.138h.408c.136 0 .272.069.34.137.34.344.817.55 1.293.55h.408c.476 0 .952-.206 1.293-.55a.517.517 0 0 1 .34-.137h.408c.136 0 .272.069.34.137.34.344.816.55 1.293.55h.408c.476 0 .952-.206 1.292-.55a.517.517 0 0 1 .34-.137h.408c.137 0 .273.069.34.137.34.344.817.55 1.293.55h.408c.477 0 .953-.206 1.293-.55a.516.516 0 0 1 .34-.137h.408c.136 0 .272.069.34.137l.544.55h1.633c.408 0 .68.276.68.689 0 .413-.272.688-.68.688H28.627c-.408 0-.68-.275-.68-.688 0-.413.34-.688.68-.688Zm11.564 9.632h-5.374a5.483 5.483 0 0 1-5.307-4.128h16.055c-.748 2.408-2.857 4.128-5.374 4.128Zm6.122-5.504H28.627c-.408 0-.68-.275-.68-.688 0-.413.272-.688.68-.688h17.687c.408 0 .68.275.68.688 0 .413-.272.688-.68.688ZM71.008 45.265c-.612-3.233-3.47-5.573-6.735-5.573H58.9c-3.265 0-6.122 2.408-6.735 5.573a2.085 2.085 0 0 0-1.428 1.996c0 .55.204 1.032.544 1.376-.34.344-.544.825-.544 1.376 0 .963.612 1.72 1.428 1.995.613 3.234 3.47 5.573 6.735 5.573h5.374c3.266 0 6.123-2.408 6.735-5.573a2.085 2.085 0 0 0 1.428-1.995c0-.55-.204-1.032-.544-1.376.34-.344.544-.826.544-1.376 0-.964-.612-1.79-1.428-1.996ZM58.899 41h5.374a5.483 5.483 0 0 1 5.306 4.128h-.272l-.136-.138a1.848 1.848 0 0 0-1.292-.55h-.409c-.476 0-.952.206-1.292.55a.516.516 0 0 1-.34.138h-.408a.516.516 0 0 1-.34-.138 1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.953.206-1.293.55a.516.516 0 0 1-.34.138h-.408a.516.516 0 0 1-.34-.138 1.848 1.848 0 0 0-1.293-.55h-.408c-.476 0-.952.206-1.292.55a.516.516 0 0 1-.34.138h-.408a.516.516 0 0 1-.34-.138 1.848 1.848 0 0 0-1.293-.55h-.408c-.477 0-.953.206-1.293.55l-.136.138h-.272C54.205 42.72 56.382 41 58.899 41Zm-6.19 5.504h1.632l.544-.55a.517.517 0 0 1 .34-.138h.409c.136 0 .272.069.34.137.34.344.816.55 1.293.55h.408c.476 0 .952-.206 1.292-.55a.517.517 0 0 1 .34-.137h.408c.136 0 .272.069.34.137.34.344.817.55 1.293.55h.408c.476 0 .953-.206 1.293-.55a.516.516 0 0 1 .34-.137h.408c.136 0 .272.069.34.137.34.344.817.55 1.293.55h.408c.476 0 .952-.206 1.292-.55a.517.517 0 0 1 .34-.137h.409c.136 0 .272.069.34.137l.544.55h1.633c.408 0 .68.276.68.689 0 .413-.272.688-.68.688H52.709c-.409 0-.68-.275-.68-.688 0-.413.34-.688.68-.688Zm11.564 9.632H58.9a5.483 5.483 0 0 1-5.306-4.128h16.054c-.68 2.408-2.857 4.128-5.374 4.128Zm6.123-5.504H52.709c-.409 0-.68-.275-.68-.688 0-.413.271-.688.68-.688h17.687c.408 0 .68.275.68.688 0 .413-.272.688-.68.688Z"
                  />
                </svg>
                <h5 className="cards-links__title">
                  <span>Собрать свой набор</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="11"
                    fill="none"
                  >
                    <path
                      fill="#000"
                      d="M.693 4.348h12.942l-3.088-3.144a.714.714 0 0 1 0-.997.684.684 0 0 1 .98 0l4.27 4.347c.27.275.27.722 0 .997l-4.27 4.348a.684.684 0 0 1-.98 0 .714.714 0 0 1 0-.997l3.088-3.144H.693A.699.699 0 0 1 0 5.053c0-.39.31-.705.693-.705Z"
                    />
                  </svg>
                </h5>
                <p className="cards-links__text">
                  Выбрать количество макарун, и выбрать вкусы.
                </p>
              </div>
            </Link>
          </Col>
          <Col xxl={6} style={{ marginBottom: "25px" }}>
            <Link to="/ready-made-kits" className="cards-links__link">
              <div className="cards-links__inner" id="card-link3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="none"
                  className="cards-links__svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#fff" />
                  <path
                    fill="#9FCE9E"
                    d="M70.49 38.28c.664-5.103-1.562-9.756-5.948-12.444a27.947 27.947 0 0 0-23.341-2.714c-7.395 2.447-13.271 7.712-16.548 14.822-5.819 12.637-1.317 27.749 10.472 35.15a28.318 28.318 0 0 0 2.602 1.45c4.623 2.265 9.932 1.63 13.854-1.657 4.121-3.456 5.746-8.856 4.24-14.095v-.002c-.657-2.274-.542-4.248.341-5.867.88-1.613 2.477-2.775 4.747-3.454 5.215-1.562 8.886-5.85 9.582-11.19ZM54.127 51.811c-1.17 2.144-1.355 4.78-.534 7.623 1.249 4.343-.093 8.816-3.501 11.673-3.259 2.731-7.498 3.238-11.345 1.352a25.645 25.645 0 0 1-2.387-1.33c-10.805-6.784-14.932-20.634-9.599-32.215 3.004-6.521 8.392-11.348 15.17-13.592a25.62 25.62 0 0 1 21.393 2.486c3.59 2.2 5.41 6.003 4.867 10.17-.574 4.421-3.62 7.973-7.946 9.268-2.835.847-4.95 2.426-6.118 4.565Z"
                  />
                  <path
                    fill="#9FCE9E"
                    d="M61.39 28.609a4.607 4.607 0 0 0-6.243 1.834 4.606 4.606 0 0 0 1.835 6.243 4.605 4.605 0 0 0 6.242-1.834 4.606 4.606 0 0 0-1.834-6.243Zm-3.297 6.04a2.284 2.284 0 0 1-.91-3.095 2.285 2.285 0 0 1 3.096-.91 2.284 2.284 0 0 1 .909 3.096 2.283 2.283 0 0 1-3.095.91ZM42.946 62.403a4.606 4.606 0 0 0-6.243 1.834 4.607 4.607 0 0 0 1.835 6.243 4.606 4.606 0 0 0 6.242-1.835 4.605 4.605 0 0 0-1.834-6.242Zm-3.297 6.041a2.285 2.285 0 0 1-.91-3.096 2.283 2.283 0 1 1 .91 3.096ZM37.105 42.526a4.606 4.606 0 0 0-1.833-6.243 4.607 4.607 0 0 0-6.244 1.835 4.606 4.606 0 0 0 1.835 6.242 4.605 4.605 0 0 0 6.242-1.834Zm-5.13-.202a2.284 2.284 0 0 1-.91-3.095 2.285 2.285 0 0 1 3.095-.91 2.284 2.284 0 0 1 .91 3.096 2.283 2.283 0 0 1-3.096.91ZM30.198 50.557a4.608 4.608 0 0 0-3.117 5.71 4.568 4.568 0 0 0 2.21 2.742 4.57 4.57 0 0 0 3.5.376 4.57 4.57 0 0 0 2.742-2.21 4.568 4.568 0 0 0 .376-3.501 4.606 4.606 0 0 0-5.711-3.117Zm1.94 6.603c-1.171.344-2.488-.375-2.832-1.546a2.285 2.285 0 0 1 1.545-2.832 2.287 2.287 0 0 1 2.833 1.546 2.267 2.267 0 0 1-.187 1.736 2.264 2.264 0 0 1-1.36 1.096ZM43.239 26.661a4.608 4.608 0 0 0-3.117 5.712 4.588 4.588 0 0 0 2.212 2.74 4.585 4.585 0 0 0 3.5.377 4.568 4.568 0 0 0 2.74-2.21 4.566 4.566 0 0 0 .376-3.502c-.691-2.359-3.353-3.811-5.711-3.117Zm1.94 6.603a2.283 2.283 0 0 1-2.832-1.545 2.285 2.285 0 0 1 1.546-2.832 2.267 2.267 0 0 1 1.737.186c.534.292.923.774 1.095 1.36.172.585.106 1.2-.186 1.735a2.267 2.267 0 0 1-1.36 1.096ZM75.593 54.246l1.636-5.659c1.076-.398 2.026-1.152 2.617-2.235 1.103-2.02.728-8.198.641-9.416-.054-.788-1.022-1.314-1.713-.935-1.072.587-6.47 3.613-7.572 5.633-.591 1.084-.711 2.29-.464 3.411l-3.874 4.437c-.033.037-.042.087-.069.127-.035.051-.083.09-.11.148L55.359 74.1a3.297 3.297 0 0 0 1.418 4.242 3.3 3.3 0 0 0 4.341-1.11l14.341-22.688c.034-.053.04-.116.065-.172.02-.045.056-.08.07-.127Zm-16.43 21.738a.967.967 0 0 1-1.697-.915l10.801-23.213 4.57 2.494-13.674 21.634ZM69.56 49.92l2.314-2.65c.364.406.785.77 1.29 1.045.505.276 1.04.433 1.577.52l-.977 3.38-4.204-2.295Zm4.715-3.64a2.607 2.607 0 0 1-1.038-3.535c.456-.834 2.853-2.476 5.03-3.78.082 2.537-.002 5.44-.458 6.276a2.608 2.608 0 0 1-3.534 1.038Z"
                  />
                </svg>
                <h5 className="cards-links__title">
                  <span>Набор с индивидуальной печатью</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="11"
                    fill="none"
                  >
                    <path
                      fill="#000"
                      d="M.693 4.348h12.942l-3.088-3.144a.714.714 0 0 1 0-.997.684.684 0 0 1 .98 0l4.27 4.347c.27.275.27.722 0 .997l-4.27 4.348a.684.684 0 0 1-.98 0 .714.714 0 0 1 0-.997l3.088-3.144H.693A.699.699 0 0 1 0 5.053c0-.39.31-.705.693-.705Z"
                    />
                  </svg>
                </h5>
                <p className="cards-links__text">
                  Собрать набор макарон с уникальным дизайном.
                </p>
              </div>
            </Link>
          </Col>
          <Col xxl={6} style={{ marginBottom: "25px" }}>
            <Link to="/ready-made-kits" className="cards-links__link">
              <div className="cards-links__inner" id="card-link4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  className="cards-links__svg"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#fff" />
                  <path
                    fill="#E58383"
                    d="m28.333 78.605.917 2.631c.167.51.75.764 1.75.764h38c1 0 1.583-.255 1.75-.764l.917-2.631c1.25 0 2.333-1.104 2.333-2.377V75.04c0-1.273-1.083-2.377-2.333-2.377H70.5v-24.7c0-.51-.333-.849-.833-.849h-2V30.647c0-.51-.334-.849-.834-.849h-5.916v-10.95c0-.508-.334-.848-.834-.848H39.917c-.5 0-.834.34-.834.849v10.95h-5.916c-.5 0-.834.339-.834.848V47.2h-2c-.5 0-.833.34-.833.849v24.7h-1.167c-1.25 0-2.333 1.103-2.333 2.377v1.103c.083 1.273 1.083 2.377 2.333 2.377Zm40.75 1.697H30.667l-.584-1.697h39.834l-.584 1.697h-.25Zm-7.25-18.419c-.5 0-.833.34-.833.85 0 1.782-1.417 3.14-3.083 3.14-1.75 0-3.084-1.443-3.084-3.14 0-.51-.333-.85-.833-.85-.5 0-.833.34-.833.85 0 1.782-1.417 3.14-3.084 3.14-1.666 0-3.083-1.443-3.083-3.14 0-.51-.333-.85-.833-.85-.5 0-.834.34-.834.85 0 1.782-1.416 3.14-3.083 3.14-1.75 0-3.083-1.443-3.083-3.14 0-.51-.334-.85-.834-.85-.5 0-.833.34-.833.85 0 1.782-1.417 3.14-3.083 3.14-1.75 0-3.084-1.443-3.084-3.14v-4.584a4.527 4.527 0 0 0 3.084 1.188 4.644 4.644 0 0 0 3.916-2.122c.834 1.273 2.334 2.122 3.917 2.122a4.644 4.644 0 0 0 3.917-2.122c.833 1.273 2.333 2.122 3.916 2.122 1.584 0 3.084-.849 3.917-2.122.833 1.273 2.333 2.122 3.917 2.122a4.644 4.644 0 0 0 3.916-2.122c.834 1.273 2.334 2.122 3.917 2.122 1.167 0 2.25-.425 3.083-1.189v4.669c0 1.783-1.416 3.14-3.083 3.14-1.75 0-3.083-1.442-3.083-3.14 0-.51-.334-.934-.834-.934Zm-2.5-42.185v3.565c0 1.443-1.166 2.546-2.5 2.546-1.333 0-2.5-1.188-2.5-2.546 0-.51-.333-.85-.833-.85-.5 0-.833.34-.833.85 0 1.443-1.167 2.546-2.5 2.546-1.417 0-2.5-1.188-2.5-2.546 0-.51-.334-.85-.834-.85-.5 0-.833.34-.833.85 0 1.443-1.167 2.546-2.5 2.546S41 24.621 41 23.263v-3.565h18.333Zm-18.583 6.96a3.806 3.806 0 0 0 2.5.933c1.417 0 2.583-.678 3.333-1.782.75 1.019 2 1.782 3.334 1.782 1.416 0 2.583-.678 3.333-1.782.75 1.019 2 1.782 3.333 1.782.917 0 1.834-.339 2.5-.848v3.14H40.75v-3.225ZM66 31.496v6.366c0 1.443-1.167 2.546-2.5 2.546S61 39.22 61 37.862c0-.51-.333-.849-.833-.849-.5 0-.834.34-.834.85 0 1.442-1.166 2.545-2.5 2.545-1.333 0-2.5-1.188-2.5-2.546 0-.51-.333-.849-.833-.849-.5 0-.833.34-.833.85 0 1.442-1.167 2.545-2.5 2.545-1.417 0-2.5-1.188-2.5-2.546 0-.51-.334-.849-.834-.849-.5 0-.833.34-.833.85 0 1.442-1.167 2.545-2.5 2.545S41 39.22 41 37.862c0-.51-.333-.849-.833-.849-.5 0-.834.34-.834.85 0 1.442-1.166 2.545-2.5 2.545-1.333 0-2.5-1.188-2.5-2.546v-6.281H66v-.085Zm-31.917 9.676a3.806 3.806 0 0 0 2.5.934c1.417 0 2.584-.679 3.334-1.782.75 1.018 2 1.782 3.333 1.782 1.417 0 2.583-.679 3.333-1.782.75 1.018 2 1.782 3.334 1.782 1.416 0 2.583-.679 3.333-1.782.75 1.018 2 1.782 3.333 1.782a4.05 4.05 0 0 0 3.334-1.782c.75 1.018 2 1.782 3.333 1.782.917 0 1.833-.34 2.5-.849V47.2H34.083v-6.027Zm34.834 7.64v5.602c0 1.782-1.417 3.14-3.084 3.14-1.75 0-3.083-1.443-3.083-3.14 0-.51-.333-.849-.833-.849-.5 0-.834.34-.834.849 0 1.782-1.416 3.14-3.083 3.14-1.75 0-3.083-1.443-3.083-3.14 0-.51-.334-.849-.834-.849-.5 0-.833.34-.833.849 0 1.782-1.417 3.14-3.083 3.14-1.667 0-3.084-1.443-3.084-3.14 0-.51-.333-.849-.833-.849-.5 0-.833.34-.833.849 0 1.782-1.417 3.14-3.084 3.14-1.75 0-3.083-1.443-3.083-3.14 0-.51-.333-.849-.833-.849-.5 0-.834.34-.834.849 0 1.782-1.416 3.14-3.083 3.14-1.75 0-3.083-1.443-3.083-3.14v-5.517h37.5v-.085Zm-37.75 17.57a4.527 4.527 0 0 0 3.083 1.188 4.645 4.645 0 0 0 3.917-2.122C39 66.722 40.5 67.57 42.083 67.57A4.644 4.644 0 0 0 46 65.448c.833 1.274 2.333 2.122 3.917 2.122 1.583 0 3.083-.848 3.916-2.122.834 1.274 2.334 2.122 3.917 2.122a4.645 4.645 0 0 0 3.917-2.122C62.5 66.722 64 67.57 65.583 67.57c1.167 0 2.25-.424 3.084-1.188v6.281h-37.5v-6.281Zm-3.417 8.743c0-.34.333-.68.667-.68H71.75c.333 0 .667.34.667.68v1.103c0 .34-.334.68-.667.68H28.417c-.334 0-.667-.34-.667-.68v-1.103Z"
                  />
                </svg>
                <h5 className="cards-links__title">
                  <span>Свадебные предложения</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="11"
                    fill="none"
                  >
                    <path
                      fill="#000"
                      d="M.693 4.348h12.942l-3.088-3.144a.714.714 0 0 1 0-.997.684.684 0 0 1 .98 0l4.27 4.347c.27.275.27.722 0 .997l-4.27 4.348a.684.684 0 0 1-.98 0 .714.714 0 0 1 0-.997l3.088-3.144H.693A.699.699 0 0 1 0 5.053c0-.39.31-.705.693-.705Z"
                    />
                  </svg>
                </h5>
                <p className="cards-links__text">
                  Нежные пирожные макаронс с разными вкусами для <br />
                  украшения вашего свадебного торжества
                </p>
              </div>
            </Link>
          </Col>
          <Col xxl={6} style={{ marginBottom: "25px" }}>
            <Link to="/corporate" className="cards-links__link">
              <div className="cards-links__inner" id="card-link5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  className="cards-links__svg"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#fff" />
                  <path
                    fill="#57B6BB"
                    d="M77.252 60.657c-.774-4.064-4.355-6.968-8.517-6.968h-6.774c-4.162 0-7.742 3-8.517 6.968a2.497 2.497 0 0 0-1.839 2.42c0 .677.29 1.258.678 1.742-.387.484-.678 1.064-.678 1.742 0 1.161.775 2.129 1.84 2.42.773 4.064 4.354 6.968 8.516 6.968h6.774c4.162 0 7.743-3 8.517-6.969a2.497 2.497 0 0 0 1.839-2.42c0-.677-.29-1.257-.678-1.741.388-.484.678-1.065.678-1.742 0-1.065-.774-2.13-1.839-2.42Zm-15.291-5.226h6.774c3.194 0 5.904 2.13 6.775 5.13h-.29l-.194-.194a2.267 2.267 0 0 0-1.645-.677h-.484c-.58 0-1.161.193-1.645.677-.097.097-.29.194-.387.194h-.484c-.194 0-.29-.097-.387-.194a2.267 2.267 0 0 0-1.646-.677h-.484c-.58 0-1.16.193-1.645.677-.097.097-.29.194-.387.194h-.484c-.193 0-.29-.097-.387-.194a2.266 2.266 0 0 0-1.645-.677h-.484c-.58 0-1.162.193-1.645.677-.097.097-.29.194-.387.194h-.484c-.194 0-.29-.097-.388-.194a2.267 2.267 0 0 0-1.645-.677H57.8c-.58 0-1.161.193-1.645.677l-.58.194h-.29c.773-3 3.483-5.13 6.677-5.13Zm-7.742 6.872h2.032l.677-.678c.097-.097.29-.193.388-.193h.483c.194 0 .29.096.388.193a2.267 2.267 0 0 0 1.645.678h.58c.581 0 1.162-.194 1.646-.678.096-.097.29-.193.387-.193h.484c.193 0 .29.096.387.193a2.267 2.267 0 0 0 1.645.678h.484c.58 0 1.161-.194 1.645-.678.097-.097.29-.193.387-.193h.678c.193 0 .29.096.387.193a2.267 2.267 0 0 0 1.645.678h.484c.58 0 1.161-.194 1.645-.678.097-.097.29-.193.387-.193h.484c.194 0 .29.096.387.193l.678.678h2.032c.484 0 .871.387.871.87a.867.867 0 0 1-.87.872H54.218a.867.867 0 0 1-.872-.871c0-.484.388-.871.871-.871Zm14.516 12h-6.774c-3.194 0-5.904-2.129-6.775-5.13h20.227c-.774 3.001-3.484 5.13-6.678 5.13Zm7.743-6.871h-22.26a.867.867 0 0 1-.87-.871c0-.484.387-.871.87-.871h22.357c.483 0 .87.387.87.87-.096.485-.483.872-.967.872Z"
                  />
                  <path
                    fill="#57B6BB"
                    d="M52.477 69.404h-3.484v-24.96h11.323v8.41h.87c.388 0 .678 0 .969.098V44.54h1.838c.484 0 .968-.484.968-.968v-8.614c0-.483-.484-.967-.968-.967H53.251a5.707 5.707 0 0 0 1.452-3.775 5.617 5.617 0 0 0-5.614-5.613c-1.838 0-3.484.871-4.451 2.226a6.151 6.151 0 0 0-5.42-3.194 6.072 6.072 0 0 0-6.097 6.097c0 1.646.677 3.097 1.742 4.259H24.604c-.484 0-.967.484-.967.967v8.42c0 .484.483.968.967.968h1.84v25.928c0 .484.483.968.967.968h25.743c-.29-.58-.484-1.161-.677-1.839Zm10.646-33.477v6.581h-14.13v-6.58h14.13Zm-17.808-5.613c0-2.13 1.645-3.774 3.775-3.774 2.129 0 3.774 1.645 3.774 3.774 0 2.13-1.645 3.774-3.774 3.774h-3.775v-3.774Zm-6.194-4.742c2.323 0 4.258 1.839 4.258 4.258v4.258h-4.258c-2.323 0-4.258-1.838-4.258-4.258.097-2.323 1.935-4.258 4.258-4.258Zm.484 43.832H28.38v-24.96h11.323v24.96h-.097Zm0-26.896h-14.13v-6.58h14.13v6.58Zm7.549 26.896H41.54v-24.96h5.613v24.96Zm0-26.896H41.54v-6.58h5.613v6.58Z"
                  />
                </svg>
                <h5 className="cards-links__title">
                  <span>Корпоративные подарки</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="11"
                    fill="none"
                  >
                    <path
                      fill="#000"
                      d="M.693 4.348h12.942l-3.088-3.144a.714.714 0 0 1 0-.997.684.684 0 0 1 .98 0l4.27 4.347c.27.275.27.722 0 .997l-4.27 4.348a.684.684 0 0 1-.98 0 .714.714 0 0 1 0-.997l3.088-3.144H.693A.699.699 0 0 1 0 5.053c0-.39.31-.705.693-.705Z"
                    />
                  </svg>
                </h5>
                <p className="cards-links__text">
                  От 85 руб за шт. С уникальным дизайном. <br />
                  Приятный комплимент для коллег и партнеров
                </p>
              </div>
            </Link>
          </Col>
          <Col xxl={6} style={{ marginBottom: "25px" }}>
            <Link to="/wholesale" className="cards-links__link">
              <div className="cards-links__inner" id="card-link6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  className="cards-links__svg"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#fff" />
                  <path
                    fill="#8A8CDC"
                    d="M73.91 49.863v-7.308H61.944c.273-.274.548-.548.73-.913h1.645a4.094 4.094 0 0 0 4.11-4.111 4.094 4.094 0 0 0-4.11-4.111H51.073v4.567c0 1.828.73 3.38 1.918 4.568h-10.14v7.308h1.827v-1.827h1.279l1.827 3.654h1.462v22.838a1.832 1.832 0 0 1-1.827 1.827 1.832 1.832 0 0 1-1.827-1.827h-1.827a3.665 3.665 0 0 0 3.654 3.654 3.665 3.665 0 0 0 3.654-3.654v-12.79h14.616v12.79a3.665 3.665 0 0 0 3.654 3.654 3.665 3.665 0 0 0 3.654-3.654H71.17a1.832 1.832 0 0 1-1.827 1.827 1.832 1.832 0 0 1-1.827-1.827V51.69h1.462l1.827-3.654h1.278v1.827h1.828ZM64.32 35.247a2.262 2.262 0 0 1 2.283 2.284 2.262 2.262 0 0 1-2.283 2.284h-.731a5.89 5.89 0 0 0 .274-1.828v-2.74h.457Zm-11.42 2.74v-2.74h9.136v2.74c0 2.558-2.01 4.568-4.568 4.568s-4.567-2.01-4.567-4.568Zm-1.826 21.925v-1.827h14.616v1.827H51.073Zm14.616-3.654H51.073V51.69h14.616v4.568Zm2.192-6.395h-19l-.914-1.827h20.828l-.914 1.827ZM44.678 46.21v-1.827h27.406v1.827H44.678ZM39.197 75.442c0 .548-.366.913-.914.913s-.913-.365-.913-.913V60.825h.913a1.832 1.832 0 0 0 1.827-1.827v-1.827a1.832 1.832 0 0 0-1.827-1.827H23.667l-.914-19.184c0-1.552-1.187-2.74-2.74-2.74-1.553 0-2.74 1.188-2.74 2.74v.914h1.826v-.913c0-.549.366-.914.914-.914s.913.365.913.913l.914 20.098v4.567h1.827v14.617c0 .548-.365.913-.914.913-.548 0-.913-.365-.913-.913v-.914h-1.827v.913c0 1.553 1.188 2.741 2.74 2.741 1.553 0 2.741-1.188 2.741-2.74V60.825h10.049v14.617c0 1.552 1.187 2.74 2.74 2.74 1.553 0 2.74-1.188 2.74-2.74v-.914h-1.826v.913Zm-15.53-18.27h14.616v1.826H23.667v-1.827ZM53.813 26.66a3.19 3.19 0 0 0-.913 2.192c0 .823.365 1.645.913 2.193l1.188 1.187 1.279-1.279-1.188-1.187c-.274-.274-.365-.548-.365-.914 0-.365.091-.64.365-.913l.548-.548a3.19 3.19 0 0 0 .914-2.193 3.19 3.19 0 0 0-.914-2.192l-1.187-1.188-1.279 1.28 1.188 1.187c.274.274.365.548.365.913 0 .366-.091.64-.365.914l-.549.548ZM59.294 26.66a3.19 3.19 0 0 0-.913 2.192c0 .823.365 1.645.913 2.193l1.188 1.187 1.279-1.279-1.188-1.187c-.274-.274-.365-.548-.365-.914 0-.365.091-.64.365-.913l.548-.548a3.19 3.19 0 0 0 .914-2.193 3.19 3.19 0 0 0-.914-2.192l-1.187-1.188-1.28 1.28 1.188 1.187c.275.274.366.548.366.913 0 .366-.091.64-.365.914l-.549.548Z"
                  />
                </svg>
                <h5 className="cards-links__title">
                  <span>Оптовые поставки</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="11"
                    fill="none"
                  >
                    <path
                      fill="#000"
                      d="M.693 4.348h12.942l-3.088-3.144a.714.714 0 0 1 0-.997.684.684 0 0 1 .98 0l4.27 4.347c.27.275.27.722 0 .997l-4.27 4.348a.684.684 0 0 1-.98 0 .714.714 0 0 1 0-.997l3.088-3.144H.693A.699.699 0 0 1 0 5.053c0-.39.31-.705.693-.705Z"
                    />
                  </svg>
                </h5>
                <p className="cards-links__text">
                  Предложение для кофеен, кафе, отелей и т.д. <br />
                  Посмотрите условия сотрудничества и отзывы.
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CardsLinks;