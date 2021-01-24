import React, {Fragment, useEffect, useState} from "react";
import ReactDom from "react-dom";
import {style} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import RedCross from "./red-cross";
import HairstyleWebesite from "../../mimified-img/hairsstyle-website.jpg";
import GameWebsite from "../../mimified-img/game-website.jpg";
import Creatif from "../../mimified-img/preview.png";
import Huddle from "../../mimified-img/huddle.jpg";
export default function ProjectsModal(props) {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        Aos.init({duration: 2000});
    });

    if (!props.projects) return null;
    return ReactDom.createPortal(
        <Fragment>
            <div style={style.MODAL_STYLE}>
                <div style={style.OVERLAY_STYLE}>
                    {/* bE CAREFULL the style of the REDCROSS is imported from the style file*/}
                    <div data-aos={"fade-up"}>
                        <RedCross
                            onclick={event => {
                                props.setProjects(state => {
                                    return !state;
                                });
                            }}
                        />
                    </div>
                    <div
                        data-aos={"fade"}
                        style={style.CONTENT_CONTAINER_STYLE}>
                        <p data-aos={"fade-left"} style={style.P_STYLE}>
                            {"This is in process of being updated."}
                        </p>
                        <p data-aos={"fade-left"}>
                            {"This is this repo's github"}
                        </p>
                        <div
                            data-aos={"fade"}
                            style={style.PROJECT_CONTAINER_STYLE}>
                            <img
                                style={style.IMG_STYLE}
                                src={require("../../mimified-img/the-cook.gif")}
                                alt="loading..."
                            />
                            <a
                                style={style.ANCHOR_STYLE}
                                href={
                                    "https://github.com/MansanSouleimanAhmed/cv_2020"
                                }
                                target={"_blank"}>
                                <button style={style.PROJ_BUTTON_STYLE}>
                                    {"Github"}
                                </button>
                            </a>
                        </div>
                        <p style={style.P_STYLE}>
                            {"This is in process of being updated."}
                        </p>
                        {/*Hairstyle*/}
                        <div style={style.PROJECT_CONTAINER_STYLE}>
                            <img
                                style={style.IMG_STYLE}
                                src={HairstyleWebesite}
                                alt="loading..."
                            />
                            <a
                                style={style.ANCHOR_STYLE}
                                href={
                                    "https://coiffeur-simple-project.netlify.app"
                                }
                                target={"_blank"}>
                                <button style={style.WEB_BUTTON_STYLE}>
                                    {"Website"}
                                </button>
                            </a>
                            <a
                                style={style.ANCHOR_STYLE}
                                href={
                                    "https://github.com/MansanSouleimanAhmed/Hairstylist"
                                }
                                target={"_blank"}>
                                <button style={style.PROJ_BUTTON_STYLE}>
                                    {"Github"}
                                </button>
                            </a>
                        </div>
                        <p style={style.P_STYLE}>
                            {"This is in process of being updated."}
                        </p>
                        {/*Creatif */}
                        <div style={style.PROJECT_CONTAINER_STYLE}>
                            <img
                                style={style.IMG_STYLE}
                                src={Creatif}
                                alt="loading..."
                            />
                            <a
                                style={style.ANCHOR_STYLE}
                                href={
                                    "https://creatif-simple-project.netlify.app/"
                                }
                                target={"_blank"}>
                                <button style={style.WEB_BUTTON_STYLE}>
                                    {"Website"}
                                </button>
                            </a>
                            <a
                                style={style.ANCHOR_STYLE}
                                href={
                                    "https://github.com/MansanSouleimanAhmed/creative-single-page"
                                }
                                target={"_blank"}>
                                <button style={style.PROJ_BUTTON_STYLE}>
                                    {"Github"}
                                </button>
                            </a>
                        </div>
                        <p style={style.P_STYLE}>
                            {"This is in process of being updated."}
                        </p>

                        {/* Hubble */}
                        <div style={style.PROJECT_CONTAINER_STYLE}>
                            <img
                                style={style.IMG_STYLE}
                                src={Huddle}
                                alt="loading..."
                            />

                            <a
                                style={style.ANCHOR_STYLE}
                                href={
                                    "https://hubble-simple-project.netlify.app"
                                }
                                target={"_blank"}>
                                <button style={style.WEB_BUTTON_STYLE}>
                                    {"Website"}
                                </button>
                            </a>
                            <a
                                style={style.ANCHOR_STYLE}
                                href={
                                    "https://github.com/MansanSouleimanAhmed/hubble"
                                }
                                target={"_blank"}>
                                <button style={style.PROJ_BUTTON_STYLE}>
                                    {"Github"}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>,
        document.getElementById("project"),
    );
}
