import React from "react";
import {animated} from "react-spring";
const PpsideDown = props => {
    return (
        <animated.p key={props.index} style={props.style}>
            {props.items}
        </animated.p>
    );
};

export default PpsideDown;
