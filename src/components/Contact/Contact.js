import React from "react";
import { Icon } from "@iconify/react";
import "./Contact.css";
import { socials } from "./data";

const Contact = () => {
  return (
    <section
      className="contact"
      id="contact"
      style={{ scrollMarginTop: "7.5rem" }}
    >
      <div className="contact__container container">
        <h2 className="section__title">Contact</h2>
        <span className="section__subtitle">Send Us a Message</span>
        <div className="contactInfo__container container">
          <div className="contact__left">
            <form onSubmit={""}>
              <input type="text" className="input__field" placeholder="Name" />
              <input
                type="email"
                className="input__field"
                placeholder="Email Address"
              />
              <input
                type="number"
                className="input__field"
                placeholder="Phone Number"
              />
              <textarea
                type="text"
                rows="4"
                placeholder="Message"
                name="message"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
          <div className="contact__right">
            <div className="info">
              <div className="info__address">
                <Icon icon="mdi:map-marker" />
                <p>Timonium, MD</p>
              </div>
              <div className="info__phone">
                <Icon icon="ic:baseline-phone" />
                <p>1 443-630-3752</p>
              </div>
            </div>
            <hr />

            <ul className="socialMedia">
              {socials.map((social, index) => {
                return (
                  <a href="#">
                    <li className="socialMedia__links" key={index}>
                      <Icon icon={social.icon} className="icon"/>
                    </li>
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
