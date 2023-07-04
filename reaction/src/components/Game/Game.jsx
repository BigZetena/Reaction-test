import React, {useState, useEffect, useRef} from 'react';
import Circle from "../Circle/Circle";
import "./game.css";


const Game = () => {
    const [cords, setCords] = useState(0);

    useEffect(() => {
        setCords(refSpace.current.getBoundingClientRect());


        }, [])
    const refSpace = useRef();



    return (
        <div className="main">
            <div className="space" ref = {refSpace}>
                <Circle cords = {cords} />
            </div>
            <div className="score"></div>
        </div>
    );
};

export default Game;