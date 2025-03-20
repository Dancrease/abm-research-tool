import React from 'react';
import './Dashboard.css';
import { FaBell, FaCog, FaChartLine, FaFire, FaTasks, FaTemperatureHigh, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">Enchantly</div>
        
        <div className="nav-links">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Research</a>
          <a href="#">Enchantly AI Insights ✨</a>
          <a href="#">History</a>
        </div>
        
        <div className="bottom-links">
          <a href="#"><FaCog /></a>
          <a href="#" className="logout-link">Log Out</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        
        {/* Top Header */}
        <div className="top-header">
          <h2 className="welcome-text">You should be in bed, Daniel! 💤</h2>
          <div className="header-icons">
            <div className="notification-bell">
              <FaBell color="gold" size={20} />
              <span className="notification-count">3</span>
            </div>
            <img src="https://i.pravatar.cc/40" alt="Profile" className="profile-pic" />
          </div>
        </div>

        {/* AI Insights */}
        <div className="ai-insights">
          <h3>Enchantly AI Insights</h3>
          <div className="insights-cards">
            <div className="insight-card">
              <p>📊 Reach out to ABC Corp—engagement spiked 30% this week.</p>
              <button>Let's do it!</button>
            </div>
            <div className="insight-card">
              <p>📊 Prepare a proposal for XYZ Ltd—strong buying intent detected.</p>
              <button>Let's do it!</button>
            </div>
            <div className="insight-card">
              <p>📊 Schedule a demo for John Doe—high resource engagement in 24h.</p>
              <button>Let's do it!</button>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* Dashboard Insights */}
        <div className="dashboard-insights">
          <h3>Dashboard Insights</h3>
          
          <div className="cards-container">
            <div className="dashboard-card">
              <h4><FaChartLine /> Account Engagement Over Time</h4>
              <p>Graph showing engagement levels.</p>
            </div>

            <div className="dashboard-card">
              <h4><FaFire /> Intent Signals</h4>
              <p>Intent signals chart data.</p>
            </div>

            <div className="dashboard-card">
              <h4><FaTasks /> Open Tasks</h4>
              <ul>
                <li><input type="checkbox" /> Follow up with Jane Smith</li>
                <li><input type="checkbox" /> Proposal for XYZ Ltd</li>
                <li><input type="checkbox" /> Review John Doe insights</li>
              </ul>
            </div>

            <div className="dashboard-card">
              <h4><FaTemperatureHigh /> Account Status Overview</h4>
              <ul>
                <li>🔥 Hot Accounts: 5</li>
                <li>⚡ Warm Accounts: 12</li>
                <li>❄️ Cool Accounts: 8</li>
              </ul>
            </div>

            <div className="dashboard-card">
              <h4><FaCalendarAlt /> Upcoming Follow-ups</h4>
              <ul>
                <li>Call with ABC Corp - Tomorrow</li>
                <li>Proposal review - XYZ Ltd - Next Monday</li>
              </ul>
            </div>

            <div className="dashboard-card">
              <h4><FaEnvelope /> Email Campaign Performance</h4>
              <ul>
                <li>Open Rate: 72%</li>
                <li>Click Rate: 46%</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
