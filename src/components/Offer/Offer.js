import React from "react";
import "./Offer.css";
import Card from "./Card";
import { services } from "./data.js";

const Offer = () => {
  return (
    <section className="offer" id="offer" style={{ scrollMarginTop: "7.5rem" }}>
      <div className="offer__container container">
        <h2 className="section__title">What We Offer</h2>
        <span className="section__subtitle">Firearm Saftey & Training</span>
        <ul className="offer__cardContainer">
          {services.map((service, index) => {
            return <Card key={index} index={index} service={service} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
