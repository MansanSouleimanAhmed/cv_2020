import React, {useState} from "react";
import MansanSAhmed from "./components/modals/mansan-s-ahmed";
import ProfileModal from "./components/modals/profile";

const Navbar = React.forwardRef((props, ref) => {
    const [modalName, setModalName] = useState(false);
    console.log(modalName);
    return (
        <div className={"nav-bar"}>
            <div className={"item-one"}>
                <p
                    onClick={event => {
                        setModalName(ModalName => !ModalName);
                    }}>
                    {"Mansan S. AHMED"}
                </p>
            </div>
            <div className={"item-two"}></div>
            <div className={"item-three"}>
                <p
                    ref={ref}
                    onClick={event => {
                        props.setProfileModal(state => !state);
                    }}>
                    {"Profile"}
                </p>
                <MansanSAhmed
                    modalName={modalName}
                    setModalName={setModalName}
                />
                <ProfileModal
                    profileModal={props.profileModal}
                    setProfileModal={props.setProfileModal}
                />
            </div>
        </div>
    );
});
export default Navbar;
