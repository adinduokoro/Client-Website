import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, logout, user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      fieldReset();
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
    console.log("You are logged out");
  };

  const fieldReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <section className="login">
      <div className="login__container">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          <h2 className="login__title">Welcome back Admin</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="input__field"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <input
              type="password"
              className="input__field"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button className={user ? "option__button button-admin" : ""} onClick={handleLogout}>
              {user ? "Logout" : "Sign In"}
            </button>
            {user ? "logged in" : ""}
          </form>
          <Link style={{ scale: "1.5" }} to="/">Go to Homepage</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
