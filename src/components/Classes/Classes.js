import React from "react";
import "./Classes.css";
import logo from "../../assets/images/washington-logo.png";
import { products } from "./data.js";

const Classes = () => {
  return (
    <section
      className="classes"
      id="classes"
      style={{ scrollMarginTop: "7.5rem" }}
    >
      <div className="classes__container container">
        <h2 className="section__title">Classes & Training</h2>
        <span className="section__subtitle">Course Pricing</span>
        <div className="pricing__container">
          <div className="logo__left">
            <img src={logo} alt="" />
            <div className="logo__text">
              <p className="info__title">FIREARMS</p>
              <p className="info__subTitle">TRAINING COURSE</p>
            </div>
          </div>
          <div className="pricing__right">
            {products.map((product, index) => {
              return (
                <div className="product__card" key={index}>
                  <p className="product__title">{product.title}</p>
                  <div className="price__container">
                    <hr className="price__line" />
                    <p className="product__price">{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="disclaimer">
          Fingerprints are required to be done prior to class <br />
          MD state police has $75.00 (wear and carry) $50.00 (HQL) application fee <br />
          ***PRICES MAY VARY***
        </p>
      </div>
    </section>
  );
};

export default Classes;
