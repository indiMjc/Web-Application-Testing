import React from "react";

const Dashboard = props => {
  return (
    <>
      <button onClick={() => props.addStrike()}>Strike</button>
      <button onClick={() => props.addBall()}>Ball</button>
      <button onClick={() => props.foul()}>Foul</button>
      <button onClick={() => props.hit()}>Hit</button>
    </>
  );
};

export default Dashboard;
