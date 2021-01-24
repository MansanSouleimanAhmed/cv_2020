import React, {Fragment, useEffect} from "react";
import ReactDom from "react-dom";
import {style} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import RedCross from "./red-cross";
import MonCV from "../../../src/cv.pdf";
export default function ProfileModal(props) {
    useEffect(() => {
        Aos.init({duration: 2000});
    });

    if (!props.profileModal) return null;
    return ReactDom.createPortal(
        <Fragment>
            <div style={style.MODAL_STYLE}>
                <div style={style.OVERLAY_STYLE}>
                    <div data-aos={"fade-up"}>
                        <RedCross
                            onclick={event => {
                                props.setModalName(state => {
                                    return !state;
                                });
                            }}
                        />
                    </div>
                    <div
                        data-aos={"fade"}
                        style={style.CONTENT_CONTAINER_STYLE}>
                        <div data-aos={"fade-left"} style={style.PARA_STYLE}>
                            <div style={style.PARA_CONTENT_STYLE}>
                                <p style={style.P_CONTENT_STYLE}>
                                    {
                                        "I did a Belgian boot camp for coding called Becode. There I have learned how to learn coding,  and how to communicate my work to others developers. Becode gave me the opportunity to participate to an Hackaton organized by the Redcross. It was really challenging and I am glad I took part of that event, because it was gratifying to solve real world problems. "
                                    }
                                </p>
                            </div>
                            <a
                                href={MonCV}
                                download={"cv.pdf"}
                                style={{
                                    display: "block",
                                    textDecoration: "none",
                                }}>
                                <button style={style.CV_BUTTON_STYLE}>
                                    <p>{"CV PDF"}</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>,
        document.getElementById("profile"),
    );
}
