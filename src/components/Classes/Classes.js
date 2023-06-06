import React from "react";
import "./Classes.css";

const Classes = () => {
  return (
    <div className="classes" id="classes" style={{ scrollMarginTop: "7.5rem" }}>
      <div className="classes__container container">
        <h2 className="section__title">Classes & Training</h2>
        <span className="section__subtitle">Course Pricing</span>
        <div className="package__container">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
