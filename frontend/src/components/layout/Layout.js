import "./layout.css";

import { Outlet } from "react-router-dom";
import Header from "../header/Header";
// import { Footer } from "./Footer";

// import icon from "../images/whatsapp.png";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="layout__container">
          <Outlet />
          {/* <div className="layout__conatiner--icon">
            <a
              className="layout__icon--link"
              target="_blank"  rel="noreferrer"
              href="https://wa.me/582129527895?text=Hola"
            >
              <img
                className="layout__icon--img"
                src={icon}
                alt="logo whatsapp"
              />
            </a>
          </div> */}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
