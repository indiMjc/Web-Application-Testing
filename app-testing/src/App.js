import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const addBall = () => {
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls => balls + 1);
    }
  };

  const addStrike = () => {
    if (strikes === 2) {
      setBalls(0);
      setStrikes(0);
    } else {
      setStrikes(strikes => strikes + 1);
    }
  };

  const hitReset = () => {
    setBalls(0);
    setStrikes(0);
  };

  const foulBall = () => {
    if (strikes < 2) {
      setStrikes(strikes => strikes + 1);
    }
    return;
  };

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        addBall={addBall}
        addStrike={addStrike}
        hit={hitReset}
        foul={foulBall}
      />
    </div>
  );
}

export default App;
