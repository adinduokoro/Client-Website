import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/images/logo.png"

const Login = () => {


  return (
    <section className="login">
      <div className="login__container">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          Welcome back Admin
          <form onSubmit={""}>
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

              <button
                className="send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
              Send
              </button>
            </form>
          return to homepage
        </div>
      </div>
    </section>
  );
};

export default Login;
