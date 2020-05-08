import React from "react";
import { Link } from "react-router-dom";
import "./ControlsTab.css";

// Component
import Music from "./Music";

const ControlsTab = ({ toggleMusic }) => {
  return (
    <div className="controls-wrapper">
      <Music toggleMusic={toggleMusic} />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default ControlsTab;
