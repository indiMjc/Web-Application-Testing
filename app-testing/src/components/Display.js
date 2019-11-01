import React from "react";

const Display = props => {
  return (
    <>
      <h1 data-testid="ball-count">Balls: {props.balls}</h1>
      <h1 data-testid="strike-count">Strikes: {props.strikes}</h1>
    </>
  );
};

export default Display;
