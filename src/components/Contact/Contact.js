import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import "./Contact.css";
import { socials } from "./data";
import emailjs from "@emailjs/browser";
import logo from "../../assets/images/logo.png";


const Contact = () => {
  const [sent, setSent] = useState(true);

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );

    e.target.reset();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  }

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
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                className="input__field"
                placeholder="Name"
                name="name"
                required
              />

              <input
                type="email"
                className="input__field"
                placeholder="Email Address"
                name="email"
                required
              />

              <input
                type="number"
                className="input__field"
                placeholder="Phone Number"
                name="number"
                required
              />

              <textarea
                type="text"
                rows="4"
                placeholder="Message"
                name="message"
                required
              ></textarea>

              <button
                className="send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div className="alt-send-button">
                  <Icon className="send-icon" icon="fa:paper-plane" />
                  <span className="send-text">SEND</span>
                </div>
              </button>
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
                      <Icon icon={social.icon} className="icon" />
                    </li>
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </ul>
            <hr />
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
