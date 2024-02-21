import { Link, NavLink } from "react-router-dom";

const Links = ({ pages }) => {
  return (
    <div className="links">
      <Link to="/" className="link">
        Главная
      </Link>
      {pages.map((item, index) => (
        <span key={index}>
          {` > `}
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            {item.name}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default Links;
