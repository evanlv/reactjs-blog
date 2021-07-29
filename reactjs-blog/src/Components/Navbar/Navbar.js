import { useEffect, useState } from "react";

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
          <li className="items">Accueil</li>
          <li className="items">Ecrire</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        btn
      </button>
    </nav>
  );
};

export default Navbar;
