import React from 'react';
import './Hero.css';
import illustration from './hero-illustration.svg'; // Import the image

function Hero() {
  return (
    <div className="hero">
      <img src={illustration} alt="Illustration" className="hero-illustration" />
      <h1>Welcome to the ABM Research Tool</h1>
      <p>Your one-stop solution for persona research.</p>
    </div>
  );
}

export default Hero;