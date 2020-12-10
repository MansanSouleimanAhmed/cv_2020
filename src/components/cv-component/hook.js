import React, {useEffect, useState} from "react";
const mouseCurrentPos = () => {
    useEffect(() => {
        window.addEventListener("mousemove", mouseMouve);
        //  console.log(mouseMouve);
        return window.removeEventListener("mouse", mouseMouve);
    }, []);

    return mousePosition;
};
export default mouseCurrentPos;
