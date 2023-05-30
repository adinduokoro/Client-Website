import React from "react";
import { Icon } from "@iconify/react";

const NavbarTop = () => {
  return (
    <div className="navbarTop">

      {/* Website Main Contact Links */}
      <div className="navbarTop__contact">
        <a href="tel:+14436303752">
          <p>+1 443-630-3752</p>
        </a>
        <a href="mailto:wdftraining@yahoo.com">
          <p>wdftraining@yahoo.com</p>
        </a>
      </div>

      {/* Website Main Social Links */}
      <div className="navbarTop__social">
        <a
          href="https://www.instagram.com/washington_firearm_training/"
          target="_blank"
        >
          <Icon icon="uil:instagram" />
        </a>
        <a href="https://mobile.twitter.com/wdftraining/" target="_blank">
          <Icon icon="uil:twitter-alt" />
        </a>
        <a href="https://facebook.com/" target="_blank">
          <Icon icon="uil:facebook" />{" "}
        </a>
      </div>
    </div>
  );
};

export default NavbarTop;
