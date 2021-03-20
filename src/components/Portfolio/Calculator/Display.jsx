import React from "react";

import "./Display.css";
const Display = (props) => {
    return (
        <div className="component-display">
            <div>{props.value}</div>
        </div>
    );
};
export default Display;
