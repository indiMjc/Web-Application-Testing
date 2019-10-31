import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const addBall = () => {
    setBalls(balls => balls + 1);
  };

  const addStrike = () => {
    setStrikes(strikes => strikes + 1);
  };

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard addBall={addBall} addStrike={addStrike} />
    </div>
  );
}

export default App;
