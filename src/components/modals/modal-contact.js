import React, {Fragment, useEffect} from "react";
import {style} from "./style";
import ReactDom from "react-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import RedCross from "./red-cross";
import MonCV from "../../../src/cv.pdf";

export default function ModalContact(props) {
    useEffect(() => {
        Aos.init({duration: 2000});
    });

    if (!props.contact) return null;
    return ReactDom.createPortal(
        <Fragment>
            <div style={style.MODAL_STYLE}>
                <div style={style.OVERLAY_STYLE}>
                    {/* bE CAREFULL the style of the REDCROSS is imported from the style file*/}
                    <div data-aos={"fade-up"}>
                        <RedCross
                            onclick={event => {
                                props.setContact(state => {
                                    return !state;
                                });
                            }}
                        />
                    </div>
                    <div
                        data-aos={"fade"}
                        style={style.CONTENT_CONTAINER_STYLE}>
                        <div data-aos={"fade-left"} style={style.P_STYLE}>
                            <div className={"contact-span"}>
                                <p style={style.P_CONTACT}>
                                    <span style={style.SPAN_CONTACT_STYLE}>
                                        {"Gmail"}
                                    </span>
                                    {" : mansan.souleiman.ahmed@gmail.com"}
                                </p>
                                <hr style={style.HR_CONTACT_STYLE} />

                                <p>
                                    <span style={style.SPAN_CONTACT_STYLE}>
                                        {"GSM"}
                                    </span>
                                    {" : +32 (0) 465 34 74 37"}
                                </p>
                                <hr style={style.HR_CONTACT_STYLE} />
                                <br />

                                <p>
                                    <span style={style.SPAN_CONTACT_STYLE}>
                                        {"Watassp"}
                                    </span>
                                    {" : +32 (0) 465 34 74 37"}
                                </p>
                                <hr style={style.HR_CONTACT_STYLE} />

                                <p>
                                    <span style={style.SPAN_CONTACT_STYLE}>
                                        {"Postal code"}
                                    </span>
                                    {" : 3000"}
                                </p>
                                <hr style={style.HR_CONTACT_STYLE} />

                                <p>
                                    <span style={style.SPAN_CONTACT_STYLE}>
                                        {"City"}
                                    </span>
                                    {" : Leuven"}
                                </p>
                                <hr style={style.HR_CONTACT_STYLE} />
                                <p>
                                    <span style={style.SPAN_CONTACT_STYLE}>
                                        {"Country"}
                                    </span>
                                    {" : Belgium"}
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
        document.getElementById("contact"),
    );
}
