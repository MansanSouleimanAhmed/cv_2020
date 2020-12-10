import React, {Fragment, useState, useEffect} from "react";
import ReactDom from "react-dom";
import ModaleName from "./hamburger/modal-name";
import {style} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import RedCross from "./red-cross";
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
                    <div  data-aos={"fade"}>
                    <RedCross  onclick={event => {props.setModalName(state => {return !state;
                        });  
                     }}/> 
                    </div>
                    <div data-aos={"fade"} style={style.CONTENT_CONTAINER_STYLE}>
                    <p data-aos={"fade-left"} style={style.P_STYLE}>
                        {
                            "This is in process of being updated."
                        }
                    </p>  
                    <p>
                
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
        document.getElementById("mansan-s-ahmed"),
    );
}
