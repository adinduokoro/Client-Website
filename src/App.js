import React, { useState } from "react";
import { UserAuth } from "./context/AuthContext";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, logout, user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      fieldReset()
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
    setEmail("")
    setPassword("")
  }

  return (
    <div className="App">
      <>
        Sign in
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Name</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button>Sign In</button>
          <br />
        </form>
        <br />
        <button onClick={handleLogout}>Logout</button>
        {user ? "logged in" : "logged out"}
        <br />
        <br />
        --------------------------------------
        <br />
      </>
      <></>
    </div>
  );
}

export default App;
