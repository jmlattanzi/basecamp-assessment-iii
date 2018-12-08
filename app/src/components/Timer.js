import React from 'react';
import './Timer.css';

const time = new Date().toLocaleTimeString();

const timer = (props) => {
    return(
        <div className="Timer">
            <div className="Clock">{time}</div>
        </div>
    )
}

export default timer;