import React from "react";
import { Link } from "react-router-dom";

// Components
import Music from "./Music";
import Button from "./styled/Button";
import ControlsWrapper from "./styled/ControlsWrapper";

const ControlsTab = ({ toggleMusic }) => {
  return (
    <ControlsWrapper>
      <Music toggleMusic={toggleMusic} />
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </ControlsWrapper>
  );
};

export default ControlsTab;
