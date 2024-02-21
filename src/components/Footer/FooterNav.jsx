import { Link } from "react-router-dom";

const FooterNav = ({ links }) => {
  return (
    <>
      <h3 className="footer__title">{links[0].title}</h3>
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          {links.map((item, index) => (
            <li key={index}>
              <Link to={`${item.path}`}>{item.link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default FooterNav;
