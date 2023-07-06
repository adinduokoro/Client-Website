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
          <br></br>
          Email Login
          <br></br>
          Password
          <br></br>
          Sign in button
          <br></br>
          return to homepage
        </div>
      </div>
    </section>
  );
};

export default Login;
