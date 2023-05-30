import React from "react";
import logo from "../../images/logo.png";
import { navs } from "./data";
import { Icon } from "@iconify/react";

const NavbarBottom = () => {
  return (
    <div className="navbarBottom">
      {/* Website Logo */}
      <div className="navbarBottom__logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Website Navigation Menu */}
      <div className="navbarBottom__navMenu">
        <ul className="navbarBottom__navList">
          {navs.map((nav, index) => {
            return (
              <li className="navbarBottom__navItem" key={index}>
                <a href={nav.path}>{nav.text}</a>
              </li>
            );
          })}
        </ul>

        {/* Book Now Button */}
        <a href="" className="navbarBottom__button button">
          Book Now
        </a>
      </div>

      {/* Navigation Controls */}
      <div className="navbarBottom__menuIcon">
        <Icon icon="mingcute:menu-fill" />
      </div>
    </div>
  );
};

export default NavbarBottom;
