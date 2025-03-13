import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faHistory,
  faSignOutAlt, // Correctly imported
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Insightly Logo" className="logo" />
      </div>

      <ul className="sidebar-menu">
        {/* Home Button */}
        <li className="menu-item">
          <Link to="/" className="menu-link">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span>Home</span>
          </Link>
        </li>

        {/* Search Button */}
        <li className="menu-item">
          <Link to="/search" className="menu-link">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <span>Search</span>
          </Link>
        </li>

        {/* History Button */}
        <li className="menu-item">
          <Link to="/history" className="menu-link">
            <FontAwesomeIcon icon={faHistory} className="icon" />
            <span>History</span>
          </Link>
        </li>
      </ul>

      {/* Log Out */}
      <div className="sidebar-footer">
        <li className="menu-item">
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
          <span>Log Out</span>
        </li>
      </div>
    </nav>
  );
};

export default Sidebar;