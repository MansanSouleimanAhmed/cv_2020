import React, {useState, useRef, useEffect} from "react";
import {animated} from "react-spring";
export default function P(props) {
    return (
        <animated.p key={props.index} style={props.style}>
            {props.items}
        </animated.p>
    );
}
