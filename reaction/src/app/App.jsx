import React, { useEffect, useState } from "react";
import Game from "../components/Game/Game";
import "./global/styles/config.css";

function App() {
  const [reactionTime, setReactionTime] = useState(0);
  const [average, setAverage] = useState(0);
  const [reactionScore, setReactionScore] = useState([]);
  // useEffect(() => {
  //     reactionArr(reactionScore)
  // },[reactionScore])
  useEffect(() => reactionArr(reactionScore), [reactionTime]);
  function reactionArr(reactionScore) {
    setReactionScore([...reactionScore, reactionTime]);
    if (reactionScore.length > 20) {
      reactionScore.shift();
    }
    setAverage(getAverage(reactionScore));
    console.log(reactionScore);
  }

  function getAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      sum += numbers[i];
    }
    return Math.floor(sum / numbers.length);
  }

  return (
    <div className="App">
      <Game
        setReactionTime={setReactionTime}
        average={average}
        reactionArr={reactionArr}
        reactionScore={reactionScore}
        setAverage={setAverage}
        setReactionScore={setReactionScore}
      ></Game>
    </div>
  );
}

export default App;
