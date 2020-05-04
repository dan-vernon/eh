/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Switch from './Switch';

const Toggle = ({ children }) => {
    const [toggleState, setToggleState] = useState(false)

    useEffect(() => {      
        console.log(toggleState)
    })

    const toggle = () => {
        setToggleState(!toggleState)
    };
    
    return (
        React.Children.map(children, childElement => React.cloneElement(childElement, {
            toggleState: toggleState,
            toggle: toggle
        }))
    )
}

const On = ({ toggleState, children }) => (toggleState ? children : null)
const Off = ({ toggleState, children }) => (toggleState ? null : children)
const Button = ({ toggleState, toggle, ...props }) => (
    <Switch on={toggleState} onClick={toggle} {...props} />
);

Toggle.On = On
Toggle.Off = Off
Toggle.Button = Button


const Usage = () => {
    return (
        <Toggle>
            <Toggle.Button />
            <Toggle.Off>This button is off</Toggle.Off>
            <Toggle.On>This button is on</Toggle.On>
        </Toggle>)
}

export default Usage;
