import React from "react";
import "./WelcomeMessage.css";

const WelcomeMessage = ({ userName }) => {
  return (
    <div className="welcome-message">
      <h1>Welcome back, {userName}!</h1>
      <p>Ready to dive into your next research?</p>
    </div>
  );
};

export default WelcomeMessage;