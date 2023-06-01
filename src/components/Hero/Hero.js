import React from "react";
import "./Hero.css";
import heroPic from "../../images/hero-pic.jpg";
import logo from "../../images/logo.png";


const Hero = () => {
  return (
    <section className="hero" id="home" style={{scrollMarginTop: "7.5rem"}} >
      <div className="hero__img" >
        <img src={heroPic} alt="hero__img" />
      </div>
      <div className="hero__overlay"></div>
      <div className="hero__info">
        <img src={logo} alt="" />
        <h1>WASHINGTON'S DIRECT</h1>
        <h2>FIREARMS TRAINING</h2>
        <h3>Qualified Instructors Teaching Safety and Defense Skills</h3>
        <a href="" className="hero__button button">
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
