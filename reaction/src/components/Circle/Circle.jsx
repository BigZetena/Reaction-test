import React, {useState} from 'react';
import "./circle.css";
const Circle = ({cords, setReactionTime}) => {
    const[top, setTop] = useState(0)
    const[left, setLeft] = useState(0)
    const[time, setTime] = useState([Date.now()])
    let spaceHeight = cords.height
    let spaceWidth = cords.width

    function changeCords() {
        time.push(Date.now());
        setReactionTime(time[1] - time[0]);
        setTime([Date.now()]);
         setTop(Math.floor(Math.random() * (spaceHeight - 100)));
         setLeft(Math.floor(Math.random() * (spaceWidth - 100)));
    }
    return (
        <div className="circle" onClick={ () => {changeCords()}} style={{top: `${top}px`, left: `${left}px`}}>
        </div>
    );
};

export default Circle;