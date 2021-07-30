import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navBarwidth, setNavbarWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setNavbarWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || navBarwidth > 500) && (
        <ul className="list">
          <Link to="/">
            <li className="items">Accueil</li>
          </Link>
          <Link to="/add-article">
            <li className="items">Add</li>
          </Link>
          <Link to="/contact">
            <li className="items">Contact</li>
          </Link>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        btn
      </button>
    </nav>
  );
};

export default Navbar;
