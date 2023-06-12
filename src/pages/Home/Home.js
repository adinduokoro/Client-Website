import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Offer from "../../components/Offer/Offer";
import PopupWindow from "../../components/PopupWindow/PopupWindow";
import "./Home.css";
import Classes from "../../components/Classes/Classes";
import Gallery from "../../components/Gallery/Gallery";
import Location from "../../components/Location/Location";
import Contact from "../../components/Contact/Contact";
import Modal from "../../components/PopupWindow/Modal";
import PopupImage from "../../components/PopupWindow/PopupImage";

const Home = () => {
  return (
    <div className="home">
      <>
        <Modal />
        <PopupWindow />
        <PopupImage />
      </>
      <>
        <Hero />
        <About />
        <Offer />
        <Classes />
        <Gallery />
        <Location />
        <Contact />
      </>
    </div>
  );
};

export default Home;
