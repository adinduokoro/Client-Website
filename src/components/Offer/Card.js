import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPopup } from "../../features/popup/popupSlice";

const Card = ({ service, index }) => {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(setPopup(index))
  };

  return (
    <li className="offerCard" onClick={() => handleClick(index)}>
      <div className="offerCard__img">
        <img src={service.img} alt="" />
      </div>
      <div className="offerCard__overlay"></div>
      <h3 className="offerCard__text">{service.text}</h3>
    </li>
  );
};

export default Card;
