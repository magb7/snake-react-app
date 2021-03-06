import React from "react";
import "./Food.css";

const Food = (props) => {
  const coords = {
    left: `${props.foodDot[0]}%`,
    top: `${props.foodDot[1]}%`,
  };
  return <div className="snake-food" style={coords}></div>;
};

export default Food;
