import React from 'react';
import './Buttons.css';

const button = (props) => {
    return(
        <div className="Button">
            <div className="Button__wrapper">
                <a className="Button--blue" href="https://nintendo.com">Button</a>
            </div>
        </div>
    )
}

export default button;