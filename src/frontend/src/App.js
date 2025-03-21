import React, { useState, useEffect } from 'react';
import './App.css';
import { FaBell, FaUserCircle, FaCog, FaFire, FaChartLine, FaTasks, FaThermometerHalf, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <div className="logo">Enchantly</div>
      <div className="menu">
        <button>Dashboard</button>
        <button>Research</button>
        <button>Enchantly AI Insights ✨</button>
        <button>History</button>
      </div>
    </div>
    <div className="bottom">
      <FaCog className="icon" />
      <button className="logout">Log Out</button>
    </div>
  </div>
);

const MainContent = () => {
  const [greeting, setGreeting] = useState("Welcome back");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Good morning");
    else if (hour >= 12 && hour < 18) setGreeting("Good afternoon");
    else if (hour >= 18 && hour < 21) setGreeting("Good evening");
    else setGreeting("You should be in bed");
  }, []);

  return (
    <div className="content">
      <div className="header">
        <div>{greeting}, Daniel! 🌙</div>
        <div className="header-right">
          <FaBell className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </div>

      <div className="main-container">
        <h2 className="section-title">Enchantly AI Insights</h2>
        <div className="insights-cards">
          <InsightCard
            icon={<FaFire />}
            title="Reach out to ABC Corp"
            description="Engagement spiked 30% this week"
          />
          <InsightCard
            icon={<FaTasks />}
            title="Proposal for XYZ Ltd"
            description="Strong buying intent detected"
          />
          <InsightCard
            icon={<FaCalendarAlt />}
            title="Schedule a demo for John Doe"
            description="High resource engagement in 24h"
          />
        </div>

        <h2 className="section-title">Dashboard Insights</h2>
        <div className="dashboard-cards">
          <DashboardCard
            icon={<FaChartLine />}
            title="Account Engagement Over Time"
            description="Graph showing engagement levels"
          />
          <DashboardCard
            icon={<FaFire />}
            title="Intent Signals"
            description="Chart for intent signals"
          />
          <DashboardCard
            icon={<FaTasks />}
            title="Open Tasks"
            description={
              <>
                <ul>
                  <li>Follow up with Jane Smith</li>
                  <li>Proposal for XYZ Ltd</li>
                  <li>Review John Doe insights</li>
                </ul>
              </>
            }
          />
          <DashboardCard
            icon={<FaThermometerHalf />}
            title="Account Status Overview"
            description={
              <>
                <ul>
                  <li>🔥 Hot Accounts: 5</li>
                  <li>⚡ Warm Accounts: 12</li>
                  <li>❄️ Cool Accounts: 8</li>
                </ul>
              </>
            }
          />
          <DashboardCard
            icon={<FaEnvelope />}
            title="Email Campaign Performance"
            description={
              <>
                <ul>
                  <li>Open Rate: 72%</li>
                  <li>Click Rate: 46%</li>
                  <li>Replies: 14%</li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

const InsightCard = ({ icon, title, description }) => (
  <div className="insight-card">
    <div>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
    <button>Let's do it!</button>
  </div>
);

const DashboardCard = ({ icon, title, description }) => (
  <div className="dashboard-card">
    <h3>{icon} {title}</h3>
    <p>{description}</p>
  </div>
);

export default App;
