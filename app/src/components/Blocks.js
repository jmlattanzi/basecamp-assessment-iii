import React from 'react';
import './Blocks.css';

const blocks = props => {
    return(
        <div className="Blocks">
            <div className="Block Block--one"></div>
            <div className="Block Block--two"></div>
            <div className="Block Block--three"></div>
            <div className="Block Block--four"></div>
        </div>
    )
}

export default blocks;