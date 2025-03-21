import React from 'react';
import './Dashboard.css';
import { FaBell, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">Enchantly</div>
        <nav className="menu">
          <a href="#">Dashboard</a>
          <a href="#">Research</a>
          <a href="#">Enchantly AI Insights ✨</a>
          <a href="#">History</a>
        </nav>
        <div className="sidebar-bottom">
          <FaCog className="icon" />
          <FaSignOutAlt className="icon" />
        </div>
      </aside>

      <main className="main-content">
        <div className="header">
          <h1>Good afternoon, Daniel! 🌙</h1>
          <div className="header-right">
            <div className="notification-bell">
              <FaBell />
              <span className="notification-count">3</span>
            </div>
            <div className="profile-pic">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
            </div>
          </div>
        </div>

        <div className="dashboard-card-container">
          <div className="dashboard-card">
            <h2>Enchantly AI Insights</h2>
            <div className="insight-cards">
              <div className="insight-card">
                <div className="insight-icon">🔥</div>
                <h3>Reach out to ABC Corp</h3>
                <p>Engagement spiked 30% this week</p>
                <button className="insight-button">Let's do it!</button>
              </div>

              <div className="insight-card">
                <div className="insight-icon">📋</div>
                <h3>Proposal for XYZ Ltd</h3>
                <p>Strong buying intent detected</p>
                <button className="insight-button">Let's do it!</button>
              </div>

              <div className="insight-card">
                <div className="insight-icon">📅</div>
                <h3>Schedule a demo for John Doe</h3>
                <p>High resource engagement in 24h</p>
                <button className="insight-button">Let's do it!</button>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h2>Dashboard Insights</h2>
            <div className="insight-cards bottom">
              <div className="insight-card light">
                <div className="insight-icon purple">📈</div>
                <h3>Account Engagement Over Time</h3>
                <p>Graph showing engagement levels</p>
              </div>

              <div className="insight-card light">
                <div className="insight-icon purple">💡</div>
                <h3>Intent Signals</h3>
                <p>Chart for intent signals</p>
              </div>

              <div className="insight-card light">
                <div className="insight-icon purple">✅</div>
                <h3>Open Tasks</h3>
                <ul>
                  <li>Follow up with Jane Smith</li>
                  <li>Proposal for XYZ Ltd</li>
                  <li>Review John Doe insights</li>
                </ul>
              </div>

              <div className="insight-card light">
                <div className="insight-icon purple">📊</div>
                <h3>Account Status Overview</h3>
                <ul>
                  <li>🔥 Hot Accounts: 5</li>
                  <li>⚡ Warm Accounts: 12</li>
                  <li>❄️ Cool Accounts: 8</li>
                </ul>
              </div>

              <div className="insight-card light wide">
                <div className="insight-icon purple">✉️</div>
                <h3>Email Campaign Performance</h3>
                <ul>
                  <li>Open Rate: 72%</li>
                  <li>Click Rate: 46%</li>
                  <li>Replies: 14%</li>
                </ul>
              </div>

              <div className="insight-card light">
                <div className="insight-icon purple">📉</div>
                <h3>Graph 1</h3>
                <p>[Chart Placeholder]</p>
              </div>

              <div className="insight-card light">
                <div className="insight-icon purple">📈</div>
                <h3>Graph 2</h3>
                <p>[Chart Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
