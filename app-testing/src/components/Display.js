import React from "react";

const Display = props => {
  return (
    <>
      <h1>Balls: {props.balls}</h1>
      <h1>Strikes: {props.strikes}</h1>
    </>
  );
};

export default Display;
