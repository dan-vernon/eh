import React from 'react';
import './Switch.css'

const Switch = ({onClick, on}) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={on} onChange={onClick} />
            <span className="slider round"></span>
        </label>)
}

export default Switch;