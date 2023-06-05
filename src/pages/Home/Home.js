import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Offer from "../../components/Offer/Offer";
import "./Home.css";
import { services } from "../../components/Offer/data";
import popupImg from "../../assets/images/popup-bg.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { showPopup } from "../../features/popup/popupSlice";

const Home = () => {
  const show = useSelector((store) => store.popup.show);
  const index = useSelector((store) => store.popup.value);
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
        <div className={show ? "popup__container show" : "popup__container"}>
          <div className="popup__left">
            <img src={popupImg} alt="" />
            <div className="popup__course">
              <h2 style={{ letterSpacing: "2px" }}>COURSE:</h2>
              <p>{services[index].text}</p>
            </div>
          </div>
          <div className="popup__right">
            <div className="popup__rightText">
              <h2 style={{ letterSpacing: "2px" }}>DESCRIPTION:</h2>
              <p>{services[index].description}</p>
            </div>
            <div className="popup__button">
              <Icon icon="mingcute:close-fill" onClick={handleClick} />
            </div>
          </div>
        </div>
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
