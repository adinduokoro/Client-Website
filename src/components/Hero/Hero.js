import React from "react";
import "./Hero.css";
import heroPic from "../../assets/images/hero-pic.jpg";
import logo from "../../assets/images/logo.png";

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ scrollMarginTop: "8em" }}>
      <div className="hero__img">
        <img src={heroPic} alt="hero__img" />
      </div>
      <div className="hero__overlay"></div>
      <div className="hero__info">
        <img src={logo} alt="" />

        <h1 className="section__title">WASHINGTON'S DIRECT</h1>
        <h2>FIREARM TRAINING</h2>
        <h3 className="section__subtitle">
          Qualified Instructors Teaching Safety and Defense Skills
        </h3>
        <a
          href="https://squareup.com/appointments/book/yha7kyt9bges4o/LD5ANTB6PMASK/services"
          target="_blank"
          className="hero__button button"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
