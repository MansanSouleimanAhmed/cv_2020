import React, {Fragment, useEffect} from "react";
import ReactDom from "react-dom";
import {style} from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import RedCross from "./red-cross";

export default function ProfileModal(props) {
    useEffect(() => {
        Aos.init({duration: 2000});
    });

    if (!props.profileModal) return null;
    return ReactDom.createPortal(
        <Fragment>
           <div style={style.MODAL_STYLE}>
                <div style={style.OVERLAY_STYLE}>
                    {/* bE CAREFULL the style of the REDCROSS is imported from the style file*/}
                    <div  data-aos={"fade"}>
                    <RedCross  onclick={event => {props.setProfileModal(state => {return !state;
                        });  
                     }}/> 
                    </div>
                    <div data-aos={"fade"} style={style.CONTENT_CONTAINER_STYLE}>
                    <p data-aos={"fade-left"} style={style.P_STYLE}>
                        {
                            "This is in process of being updated."
                        }
                    </p>  
                    
                    </div>
                </div>
            </div>
        </Fragment>,
        document.getElementById("profile"),
    );
}
