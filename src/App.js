import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

// Check if the user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem("userToken");
};

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        {isAuthenticated() && <Sidebar />} {/* Show sidebar only if authenticated */}
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={<ProtectedRoute element={<HomePage />} />}
            />
            <Route
              path="/search"
              element={<ProtectedRoute element={<SearchPage />} />}
            />
            <Route
              path="/history"
              element={<ProtectedRoute element={<HistoryPage />} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;