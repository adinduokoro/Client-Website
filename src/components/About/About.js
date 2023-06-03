import React from "react";
import "./About.css";
import aboutPic from "../../images/about-pic.jpg";

const About = () => {
  return (
    <section className="about" id="about" style={{ scrollMarginTop: "7.5rem" }}>
      <div className="about__container container">
        <img src={aboutPic} alt="" />
        <div className="about__overlay"></div>
        <div className="about__text">
          <h2 className="section__title">About Us</h2>
          <span className="section__subtitle">Washington's Direct LLC</span>
          <p>
            Provides the finest firearms and tactics training available today.
            Whether you are in the military, law enforcement, or are a private
            citizen, we are here to assist you in the very best in quality,
            firearms training. Our courses are conducted in a friendly, relaxed
            environment that emphasizes safety and mastery of weapons systems
            for all experience levels. No matter what your level of expertise,
            we have a class that can teach you something new. We encourage all
            students, from beginners to the more advanced, to challenge
            themselves by learning and reinforcing proper techniques in order to
            take their skills to the next level
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
