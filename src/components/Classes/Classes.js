import React from "react";
import "./Classes.css";
import logo from "../../assets/images/washington-logo.png";

const Classes = () => {
  return (
    <section className="classes" id="classes" style={{ scrollMarginTop: "7.5rem" }}>
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
            {}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
