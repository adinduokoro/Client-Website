import React from "react";
import "./Location.css";
import locationImg from "../../assets/images/location-img.jpg";

const Location = () => {
  return (
    <section
      className="location"
      id="location"
      style={{ scrollMarginTop: "7.5rem" }}
    >
      <div className="location__container container">
        <h2 className="section__title">Location</h2>
        <span className="section__subtitle">Visit Us Today</span>
        <div className="address__container">
          <img src={locationImg} alt="" />
          <div className="location__address">
            <div className="address">
              <h2>Address</h2>
              <p>8 East Seminary Ave</p>
              <p>Timonium, MD 21093</p>
              <p>Monday - Sunday: 9am - 5pm EST</p>
            </div>
            <div className="phonenumber">
              <h2>Address</h2>
              <p>+1 443-630-3752</p>
              <p>wdftraining@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

