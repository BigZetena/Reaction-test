import React from 'react';
import "./score.css"
import clsx from "clsx";

const Score = ({reactionScore, average, setReactionScore, setAverage}) => {
    console.log(reactionScore[reactionScore.length])
    return (
        <div className="score__wrapper">
            <div className="current">
                <ul className="current__ul">
                {
                    reactionScore.map(number =>(
                <li className="current__wrapper" key={number}>
                    <p className= {clsx( "current__score", {"current__score_red":number>average})}> <span className="average">Current:</span>  {number}ms</p>
                </li>))
                }
                </ul>
            </div>
            <div className="average__wrapper">
                <p className="average">Average: {average}ms</p>
                <button className="reset" onClick={() => {setReactionScore([]); setAverage(0)}}>Reset</button>
            </div>
        </div>
    );
};

export default Score;