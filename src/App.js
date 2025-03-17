import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const starfield = document.querySelector('.starfield');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${Math.random() * 5 + 5}s`;

      starfield.appendChild(star);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <div className="starfield"></div>
      <div className="shooting-stars"></div>

      {isLoggedIn ? (
        <div className="dashboard-wrapper">
          <Sidebar handleLogout={handleLogout} />
          <Dashboard />
        </div>
      ) : (
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
    </>
  );
}

function Sidebar({ handleLogout }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">🔮 Insightly.io</h2>
      <ul className="sidebar-menu">
        <li className="menu-item active">Home</li>
        <li className="menu-item">Research</li>
        <li className="menu-item">Saved Personas</li>
        <li className="menu-item">Settings</li>
      </ul>
      <button onClick={handleLogout} className="logout-btn">Log Out</button>
    </aside>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>🚀 Welcome to your Dashboard!</h1>
      <div className="dashboard-content">
        <div className="card">Widget 1</div>
        <div className="card">Widget 2</div>
        <div className="card">Widget 3</div>
      </div>
    </div>
  );
}

function Login({ username, setUsername, password, setPassword, handleLogin }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="app-title">🔮 insightly.io</h1>
        <h2>Welcome Back!</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">Log In</button>
        </form>

        <a href="#" className="login-link">Forgot your password?</a>
      </div>
    </div>
  );
}

export default App;
