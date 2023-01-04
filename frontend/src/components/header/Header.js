
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import './header.css'
const Header = () => {
  const [toggleVisible, setTogglevisible] = useState(false);
  const visbleMenu = () => {
    setTogglevisible(!toggleVisible);
  };

  return (
    <>
      <div className="header__container">
        <nav className="header__nav">
        
            <Link className="header__logo-container" to="/">
          logo
            </Link>
          
          <button onClick={visbleMenu} className="icon-menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul
            className={
              toggleVisible
                ? "header__nav--menu nav-menu_visible"
                : "header__nav--menu"
            }
          >
              <li onClick={visbleMenu} className="header__nav--item">
              <Link to="/" >
             inicio
              </Link>
            </li>
            <li onClick={visbleMenu} className="header__nav--item">
              <Link to="/about">Sobre mi</Link>
            </li>
          
            <li onClick={visbleMenu} className="header__nav--item">
              <Link to="/products">Tienda</Link>
            </li>
           
            {/* <li onClick={visbleMenu} className="header__nav--item">
              <Link to="/contact">Contacto</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
