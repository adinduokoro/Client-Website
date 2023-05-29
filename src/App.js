import React, { useState } from "react";
import { UserAuth } from "./context/AuthContext";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, logout, user} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e.message);
    }
    console.log("You are logged out")
  };


  return (
    <div className="App">
      Sign in
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
      main
      <br />
    </div>
  );
}

export default App;
