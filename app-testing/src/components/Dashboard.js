import React from "react";

const Dashboard = props => {
  return (
    <>
      <button onClick={() => props.addStrike()}>Strike</button>
      <button onClick={() => props.addBall()}>Ball</button>
      <button>Foul</button>
      <button>Hit</button>
    </>
  );
};

export default Dashboard;
