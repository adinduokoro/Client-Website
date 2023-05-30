import React from "react";
import logo from "../../images/logo.png";
import { navs } from "./data";

const NavbarBottom = () => {
  return (
    <div className="navbarBottom">
      {/* Website Logo */}
      <div className="navbarBottom__logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Website Navigation Menu */}
      <div className="navbarBottom__navMenu">
        <ul className="navbarBottom__navList grid">
          {navs.map((nav, index) => {
            return (
              <li className="navbarBottom__navItem" key={index}>
                <a href={nav.path}>{nav.text}</a>
              </li>
            );
          })}
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default NavbarBottom;
