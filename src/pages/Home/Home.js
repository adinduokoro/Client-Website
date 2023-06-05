import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Offer from "../../components/Offer/Offer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__overlay">

      </div>
      <div className="popup__container">
        Hello World
      </div>
      <>
        <Hero />
        <About />
        <Offer />
      </>
    </div>
  );
};

export default Home;
