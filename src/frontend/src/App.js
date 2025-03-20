import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css'; // Make sure this contains your background styles!

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Generate twinkling stars on load
    const starContainer = document.querySelector('.stars');
    const numStars = 150;

    if (starContainer) {
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starContainer.appendChild(star);
      }
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">

      {/* Background Elements */}
      <div className="background">
        <div className="gradient"></div>

        {/* Nebula Clouds */}
        <div className="nebula one"></div>
        <div className="nebula two"></div>
        <div className="nebula three"></div>

        {/* Stars */}
        <div className="stars"></div>

        {/* Shooting Stars */}
        <div className="shooting-star"></div>
        <div className="shooting-star delay-1"></div>
        <div className="shooting-star delay-2"></div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
      </div>

    </div>
  );
}

export default App;
