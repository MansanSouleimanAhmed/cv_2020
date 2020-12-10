import React from "react";
import ReactDOM from "react-dom";
import "./css/app.min.css";
import App from "./app.js";
export default function Index() {
    return <App />;
}

ReactDOM.render(<Index />, document.querySelector("#app"));
