import React from "react";
import "./Button.css"; // Ensure you have this CSS file

const AuthButton = ({ text }) => {
  return (
    <button className="auth-button">
      {text}
    </button>
  );
};

export default AuthButton;
