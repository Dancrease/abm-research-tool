import React from "react";
import QuickActions from "./QuickActions"; // Correct import path
import Insights from "./Insights";
import VideoGuide from "./VideoGuide";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <QuickActions />
      <Insights />
      <VideoGuide />
    </div>
  );
};

export default HomePage;