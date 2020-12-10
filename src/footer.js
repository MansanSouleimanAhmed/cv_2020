import React, {Fragment} from "react";
import ModalContact from "./components/modals/modal-contact";

const Footer = React.forwardRef((props, ref) => {
    return (
        <Fragment>
            <ModalContact
                contact={props.contact}
                setContact={props.setContact}
            />
            <div className={"footer"}>
                <div className={"item-one"}>
                    <p>{"2020"}</p>
                </div>

                <div className={"item-two"}></div>
                <div className={"item-three"}>
                    <p
                        onClick={event => {
                            props.setContact(state => {
                                return !state;
                            });
                        }}
                        ref={ref}>
                        {"Contact"}
                    </p>
                </div>
            </div>
        </Fragment>
    );
});
export default Footer;
