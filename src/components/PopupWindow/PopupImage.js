import React from "react";
import "./PopupImage.css";
import { useSelector } from "react-redux";

const PopupImage = () => {
  const imgView = useSelector((store) => store.popup.imgView)
  const imageSrc = useSelector((store) => store.popup.imageSrc)

  return (
    <div className={imgView ? "popupImage__container show" : "popupImage__container"}>
      <div className="image__popup">
        <img src={imageSrc}/>
      </div>
    </div>
  );
};

export default PopupImage;
