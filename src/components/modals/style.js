export const style = {
    MODAL_STYLE: {
        position: "fixed",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0,.6)",
        fontSize: "1.8em",
    },
    OVERLAY_STYLE: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: "70%",
        width: "80%",
        zIndex: 3,
        textAlign: "center",
        backgroundColor: "#fff",
    },

    RED_CROSS_STYLE: {
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        backgroundColor: "red",
        zIndex: "10",
        cursor: "pointer",
    },

    CONTENT_CONTAINER_STYLE: {
        position: "relative",
        overflowX: "hidden",
        height: "100%",
        width: "100%",
        zIndex: "-1",
    },
    ANCHOR_STYLE: {
        display: "block",
    },
    P_STYLE: {
        margin: "30px 0px 30px 0px",
    },
    PROJECT_CONTAINER_STYLE: {
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
        margin: "40px 0px 50px 0px",
        height: "230px",
        width: "250px",
        boxShadow: "-2px -1px 52px 10px rgba(0,0,0,0.83)",
        /*      -webkit-box-shadow: -2px -1px 102px 24px rgba(0,0,0,0.83);
        -moz-box-shadow: -2px -1px 102px 24px rgba(0,0,0,0.83); */
    },
    PROJ_BUTTON_STYLE: {
        position: "absolute",
        borderRadius: "50%",
        height: "55px",
        width: "55px",
        textAlign: "center",
        top: "64%",
        left: "40%",
        cursor: "pointer",
        outline: "inherit",
        border: "none",
        background: "rgb(255,218,185)",
        boxShadow: " inset 0px 0px  10px 0px red",
    },
    IMG_STYLE: {
        height: "230px",
        width: "250px",
    },
};
