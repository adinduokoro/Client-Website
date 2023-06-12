import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Offer from "../../components/Offer/Offer";
import PopupWindow from "../../components/PopupWindow/PopupWindow";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { showModal, showPopup } from "../../features/popup/popupSlice";
import Classes from "../../components/Classes/Classes";
import Gallery from "../../components/Gallery/Gallery";
import Location from "../../components/Location/Location";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  const modal = useSelector((store) => store.popup.modal)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showModal(false))
    dispatch(showPopup(false))
  };

  return (
    <div className="home">
      <>
        <div
          className={modal ? "home__overlay show" : "home__overlay"}
          onClick={handleClick}
        ></div>
        <PopupWindow />
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
