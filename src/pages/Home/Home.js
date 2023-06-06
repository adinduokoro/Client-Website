import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Offer from "../../components/Offer/Offer";
import PopupWindow from "../../components/PopupWindow/PopupWindow";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { showPopup } from "../../features/popup/popupSlice";

const Home = () => {
  const show = useSelector((store) => store.popup.show);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showPopup(false));
  };

  return (
    <div className="home">
      <>
        <div
          className={show ? "home__overlay show" : "home__overlay"}
          onClick={handleClick}
        ></div>
        <PopupWindow />
      </>
      <>
        <Hero />
        <About />
        <Offer />
      </>
    </div>
  );
};

export default Home;
