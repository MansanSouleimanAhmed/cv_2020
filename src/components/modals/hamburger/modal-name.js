import React, {Fragment} from "react";
import {style} from "../style";

export default function ModaleName(props) {
    return (
        <Fragment>
            <div
                onClick={event => {
                    props.setModalName(modalName => {
                        return !modalName;
                    });
                }}
                style={style.BUTTON_STYLE}
            />
        </Fragment>
    );
}
