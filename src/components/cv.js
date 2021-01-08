import React, {Fragment, useRef, useEffect, useState} from "react";
import {useSpring, animated, useTrail} from "react-spring";
import MonCV from "../../src/cv.pdf";
import mousePosition from "./cv-component/hook";
import Navbar from "../nav-bar";
import Text from "../components/cv-component/text";
import Footer from "../footer";
import P from "./cv-component/p";
import PpsideDown from "./cv-component/p-upside-down";
import ProjectsModal from "./modals/projects-modal";

function Cv() {
    const [contact, setContact] = useState(false);
    const [modal, setModal] = useState(false);
    const [profileModal, setProfileModal] = useState(false);
    const [projects, setProjects] = useState(false);
    const contactRef = useRef(null);
    const {x, y} = useSpring({
        from: {x: 0, y: 0},
    });
    const fast = {mass: 900};
    const configObj = {mass: 2, tension: 200, friction: 50};
    const transUpsideDown = (x, y) => `translateX(-${x}px)`;
    const trans = (x, y) => `translateX(-${x}px)`;
    const items = [
        "I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_",
        "I AM A FRONT-END DEVELOPER-REACTJS_I AM A FRONT-END DEVELOPER-REACTJS_",
    ];
    const [trail, set] = useTrail(items.length, () => ({
        xy: [0, 0],

        config: configObj,
    }));
    return (
        <Fragment>
            <ProjectsModal projects={projects} setProjects={setProjects} />
            <div className={"container"}>
                <Navbar
                    profileModal={profileModal}
                    setProfileModal={setProfileModal}
                />

                <div className={`profile`}>
                    <div
                        className={"croix"}
                        onClick={event => setProfile(profile => !profile)}>
                        <div className={"item"} />
                        <div className={"item"} />
                        <div className={"item"} />
                    </div>
                    <div className={"profile-span"}>
                        <span>
                            {
                                "I may not have a lot of experience, however I'm a highly motivated web developer, who never stops learning and is not afraid to take on new challenges. I want to become a full stack developer, proficient in React JS in the front-end and Django (a Python's framework) in the back-end."
                            }
                        </span>
                        <br />
                        <a href={MonCV} download={"cv.pdf"}>
                            <div className={"cv-pdf"}>{"CV PDF"}</div>
                        </a>
                    </div>
                </div>
                <div className={`modal`}>
                    <div className={"display-project"}>
                        <div
                            className={"croix"}
                            onClick={() => setModal(modal => !modal)}>
                            <div className={"item"} />
                            <div className={"item"} />
                            <div className={"item"} />
                        </div>
                        <div className={"item-one"}></div>
                        <div className={"item-two"}>
                            <div className={"projects"}>
                                <p>{"Project 1 : Hairstyle"} </p>
                                <a
                                    href={
                                        "https://github.com/MansanSouleimanAhmed/Hairstylist"
                                    }>
                                    <p>{"Github"}</p>
                                </a>
                                <a
                                    href={
                                        "https://coiffure-hairstylist.netlify.app/"
                                    }>
                                    <p>{"Website"}</p>
                                </a>
                                <br />
                                <p>{"Project 2: This CV's repository"}</p>
                                <a
                                    href={
                                        "https://github.com/MansanSouleimanAhmed/cv"
                                    }>
                                    <p>{"This CV's Github"}</p>
                                </a>
                            </div>
                        </div>
                        <div className={"item-three"}></div>
                    </div>
                </div>
                <div className={"blur-left"}></div>
                <div className={"left-item"}>
                    <div className={"text-left"}>
                        {trail.map((props, index) => (
                            <PpsideDown
                                items={items}
                                key={index}
                                style={{
                                    transform: props.xy.interpolate(
                                        transUpsideDown,
                                    ),
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className={"middle-item"}
                    onMouseMove={e => set({xy: [e.clientX, e.clientX]})}>
                    <div
                        className={"project"}
                        style={{ zIndex: 10, backgroundColor: "#ff0000", padding:"5px"}}
                        onClick={event => {
                            setProjects(state => {
                                return !state;
                            });
                        }}>
                        <p>{"Projects"}</p>
                    </div>
                    <div className={"background-text"}>
                        {trail.map((props, index) => (
                            <P
                                items={items}
                                key={index}
                                style={{
                                    transform: props.xy.interpolate(trans),
                                }}
                            />
                        ))}
                    </div>
                    <div className={"projects"}></div>
                </div>
                <div className={"blur-right"}></div>
                <div className={"right-item"}>
                    <div className={"text-right"}>
                        {trail.map((props, index) => (
                            <PpsideDown
                                items={items}
                                key={index}
                                style={{
                                    transform: props.xy.interpolate(
                                        transUpsideDown,
                                    ),
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className={`contact`}>
                    <div className={"croix-contact"}>
                        <div className={"item"} /> <div className={"item"} />
                        <div className={"item"} />
                    </div>
                    <div className={"contact-span"}>
                        <span>
                            {"Gmail : mansan.souleiman.ahmed@gmail.com"}
                        </span>
                        <hr />
                        <span>{"GSM : +32 (0) 465 34 74 37"}</span>
                        <hr />
                        <br />
                        <span>{"Watassp : +32 (0) 465 34 74 37"}</span>
                        <hr />
                        <span>{"Code postal : 4000"}</span>
                        <hr />
                        <span>{"City : Liège"}</span>
                        <hr />
                        <span>{"Country : Belgium"}</span>
                    </div>
                </div>
                <Footer
                    ref={contactRef}
                    contact={contact}
                    setContact={setContact}
                />
            </div>
        </Fragment>
    );
}

export default Cv;
