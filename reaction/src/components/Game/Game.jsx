import React, { useState, useEffect, useRef } from "react";
import Circle from "../Circle/Circle";
import "./game.css";
import Score from "../Score/Score";

const Game = ({
  setReactionTime,
  reactionArr,
  reactionScore,
  average,
  setReactionScore,
  setAverage,
}) => {
  const [cords, setCords] = useState(0);

  useEffect(() => {
    setCords(refSpace.current.getBoundingClientRect());
  }, []);
  const refSpace = useRef();

  return (
    <div className="main">
      <div className="space" ref={refSpace}>
        <Circle
          cords={cords}
          setReactionTime={setReactionTime}
          reactionArr={reactionArr}
          reactionScore={reactionScore}
        />
      </div>
      <div className="score">
        <Score
          reactionScore={reactionScore}
          average={average}
          setReactionScore={setReactionScore}
          setAverage={setAverage}
        />
      </div>
    </div>
  );
};

export default Game;
