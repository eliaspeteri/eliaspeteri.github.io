import React from "react";
import "./Button.css";

const Button = (props) => {
    const handleClick = () => {
        props.clickHandler(props.name);
    };
    return (
        <div
            className={`component-button 
            ${props.orange ? "orange" : ""} 
            ${props.wide ? "wide" : ""}`}
        >
            <button onClick={handleClick}>{props.name}</button>
        </div>
    );
};
export default Button;
