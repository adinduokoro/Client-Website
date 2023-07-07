import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import "./Login.css";
import logo from "../../assets/images/logo.png";

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
      console.log(e.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e.message);
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

            {/* <button>Sign In</button> */}
            <button onClick={handleLogout}>
              {user ? "Logout" : "Sign In"}
            </button>
            {user ? "logged in" : ""}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
