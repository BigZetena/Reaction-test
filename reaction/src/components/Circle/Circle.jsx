import React, {useState} from 'react';
import "./circle.css";
const Circle = ({cords}) => {
    const[top, setTop] = useState(0)
    const[left, setLeft] = useState(0)
    const[reactionTime, setReactionTime] = useState(0)
    let spaceHeight = cords.height
    let spaceWidth = cords.width
    let time = [Date.now()]
    function changeCords() {
         setTop(Math.floor(Math.random() * (spaceHeight - 100)));
         setLeft(Math.floor(Math.random() * (spaceWidth - 100)));
         time.push(Date.now());
         setReactionTime(time[1] - time[0]);
         time = [];
    }
    return (
        <div className="circle" onClick={ () => {changeCords()}} style={{top: `${top}px`, left: `${left}px`}}> {reactionTime}
        </div>
    );
};

export default Circle;