import React from "react";

const Header = ({ message }) => {
    return (
        <>
            <div className="grid-container">
                <h1>{message}</h1>
            </div>
            <div className="grid-container"></div>
        </>
    );
};

export default Header;
