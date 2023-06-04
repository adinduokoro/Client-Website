import React from "react";
import "./Offer.css";
import { services } from "./data";

const Offer = () => {
  return (
    <section className="offer" id="offer" style={{ scrollMarginTop: "7.5rem" }}>
      <div className="offer__container container">
        <h2 className="section__title">What We Offer</h2>
        <span className="section__subtitle">Firearm Saftey & Training</span>
        <div className="offerCard__container">
          {services.map((service, index) => {
            return (
              <div className="offerCard" key={index}>
                <div className="offerCard__img">
                  <img src={service.img} alt="" />
                </div>
                <div className="offerCard__overlay"></div>
                <div className="text">
                {service.text}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
