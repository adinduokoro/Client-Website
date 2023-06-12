import React from "react";
import "./PopupWindow.css";
import { useSelector, useDispatch } from "react-redux";
import popupImg from "../../assets/images/popup-bg.jpg";
import { services } from "../../components/Offer/data";
import { Icon } from "@iconify/react";
import { showModal, showPopup } from "../../features/popup/popupSlice";

const PopupWindow = () => {
  const show = useSelector((store) => store.popup.show);
  const index = useSelector((store) => store.popup.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showPopup(false));
    dispatch(showModal(false));
  };

  return (
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
  );
};

export default PopupWindow;
