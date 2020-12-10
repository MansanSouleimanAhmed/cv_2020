import React, {Fragment, useEffect, useState} from "react";
import ReactDom from "react-dom";
import {style} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import RedCross from "./red-cross";
import forwardButton from "../../mimified-img/forward_button.png";
import backButton from "../../mimified-img/back_button.png"
export default function ProjectsModal(props) {
    const [slide, setSlide]=useState(0);

    useEffect(() => {
        Aos.init({duration: 2000});
    });

    if (!props.projects) return null;
    return ReactDom.createPortal(
        <Fragment>
            <div style={style.MODAL_STYLE}>
                <div style={style.OVERLAY_STYLE}>
                    {/* bE CAREFULL the style of the REDCROSS is imported from the style file*/}
                    <div  data-aos={"fade"}>
                    <RedCross  onclick={event => {props.setProjects(state => {return !state;
                        });  
                     }}/> 
                    </div>
                    <div data-aos={"fade"} style={style.CONTENT_CONTAINER_STYLE}>
                   
                         <p data-aos={"fade-left"} style={style.P_STYLE}>
                        {
                            "This is in process of being updated."
                        }
                    </p>
          
              {/*   <p>{"You can find here this portfolio's github repository and some project and their github repository."}</p>
                    <img height={"200px"} width={"250px"} src={require('../../mimified-img/the-cook.gif')} alt="loading..."/>

                    <p>{"Second project"}</p>
                    <p>{"You can find here this portfolio's github repository and some project and their github repository."}</p>
                    <img height={"200px"} width={"250px"} src={require('../../mimified-img/the-cook.gif')} alt="loading..."/>

                    <p>{"Second project"}</p>
                    <p>{"You can find here this portfolio's github repository and some project and their github repository."}</p>
                    <img height={"200px"} width={"250px"} src={require('../../mimified-img/the-cook.gif')} alt="loading..."/>
                    <p>{"Second project"}</p>  */}
                    </div>
                </div>
            </div>
        </Fragment>,
        document.getElementById("project"),
    );
}
