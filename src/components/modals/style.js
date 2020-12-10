export const style = {
    MODAL_STYLE: {
        position: "fixed",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0,.6)",
        fontSize:"1.8em"
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
        height:"50px",
        width:"50px", 
        borderRadius:'50%',
        backgroundColor:"red", 
        zIndex:'10'   
    },
    
  
    CONTENT_CONTAINER_STYLE: {
        position:"relative",
        overflow:"scroll",
        height:"100%",
        width:"100%",
        zIndex:"-1"
 
    },
    IMG_ARROW_PREVIOUS:{
        position:"fixed",
     
    },
    IMG_ARROW_NEXT:{
    position:"fixed",
    right:"3%",
  
    },

    IMG_STYLE:{
    minWidth: "100%",
    height:"330px"
    },
};
