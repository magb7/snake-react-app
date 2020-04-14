import React from "react";

const SnakeDot = (props) => {
  return (
    <div>
      {props.snakeDot.map((dot, i) => {
        const coord = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <div className="snake-dot" key={i} style={coord}></div>;
      })}
    </div>
  );
};

export default SnakeDot;

