import React, {Fragment, useState, useEffect} from "react";
import ReactDom from "react-dom";
import ModaleName from "./hamburger/modal-name";
import {style} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import RedCross from "./red-cross";
import MonCV from "../../../src/cv.pdf";
export default function MansanSAhmed(props) {
    useEffect(() => {
        Aos.init({duration: 2000});
    });

    if (!props.modalName) return null;
    return ReactDom.createPortal(
        <Fragment>
            <div style={style.MODAL_STYLE}>
                <div style={style.OVERLAY_STYLE}>
                    {/* bE CAREFULL the style of the REDCROSS is imported from the style file*/}
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
                                        "I had a rough past that gave me the never give up mindset, along side  with the hustling mindset. So I am still there hustling."
                                    }
                                </p>
                            </div>
                            <div style={style.PARA_CONTENT_STYLE}>
                                <p>{"let getExp = false;"}</p>
                                <br />
                                <p>{"let getJob=(YouGetAJob)=>{"}</p>
                                <br />
                                <p>{"if(!getExp){"}</p>
                                <br />
                                <p>{"return YouGetAJob;"}</p>
                                <br />
                                <p>{"}else {"}</p>
                                <br />
                                <p>{"let keepHustling = (cv) => {"}</p>
                                <br />
                                <p>{"while (!getExp) {"}</p>
                                <br />
                                <p>{"alert(cv);"}</p>
                                <br />
                                <p>{"}"}</p>
                                <br />
                                <p>{"}"}</p>
                                <br />
                                <p>{"}"}</p>
                                <br />
                                <p>{"}"}</p>
                                <br />
                                <p>{"}"}</p>
                                <br />
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
        document.getElementById("mansan-s-ahmed"),
    );
}
