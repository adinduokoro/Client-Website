import React from "react";
import logo from "../../assets/images/logo.png";
import { UserAuth } from "../../context/AuthContext";
import { navs } from "./data";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch, closeMenu } from "../../features/toggle/toggleSlice";

const NavbarBottom = () => {
  const { logout, user } = UserAuth();

  const toggle = useSelector((store) => store.plug.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSwitch());
  };

  const handleMenuClose = () => {
    dispatch(closeMenu());
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e.message);
    }
    console.log("You are logged out");
  };

  return (
    <nav className="navbarBottom">
      {/* Website Logo */}
      <div className="navbarBottom__logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Website Navigation Menu */}
      <div
        className={
          toggle ? "navbarBottom__navMenu active" : "navbarBottom__navMenu"
        }
      >
        <ul className="navbarBottom__navList">
          {navs.map((nav, index) => {
            return (
              <li className="navbarBottom__navItem" key={index}>
                <a onClick={handleMenuClose} href={nav.path}>
                  {nav.text}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Book Now Button */}
        <a href={user ? null : "https://squareup.com/appointments/book/yha7kyt9bges4o/LD5ANTB6PMASK/services"} target={user ? null : "_blank"}>
          <button className={user ? "navbarBottom__button button button-admin" : "navbarBottom__button button"} onClick={user ? () => handleLogout() : null }>
            {user ? "Logout" : "Book Now"}
          </button>
        </a>
      </div>

      {/* Navigation Controls */}
      <div className="navbarBottom__menuIcon" onClick={handleClick}>
        <Icon icon={toggle ? "mingcute:close-fill" : "mingcute:menu-fill"} />
      </div>
    </nav>
  );
};

export default NavbarBottom;
