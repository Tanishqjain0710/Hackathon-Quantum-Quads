// src/pages/Home.js
import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Home = () => {
  // Default to Registration view
  const [showLogin, setShowLogin] = useState(false);

  // Callback passed to the Register component
  const handleRegistrationSuccess = () => {
    setShowLogin(true);
  };

  return (
    <div className="container">
      <div className="card">
        {showLogin ? (
          <Login />
        ) : (
          <Register onRegistrationSuccess={handleRegistrationSuccess} />
        )}
        <div className="toggle-link" onClick={() => setShowLogin(!showLogin)}>
          {showLogin
            ? "Don't have an account? Register"
            : "Already have an account? Log in"}
        </div>
      </div>
    </div>
  );
};

export default Home;
