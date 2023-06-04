import React from "react";

const Card = ({ index, service }) => {


  return (
    <div className="offerCard" key={index}>
      <div className="offerCard__img">
        <img src={service.img} alt="" />
      </div>
      <div className="offerCard__overlay"></div>
      <h3 className="offerCard__text">{service.text}</h3>
    </div>
  );
};

export default Card;
