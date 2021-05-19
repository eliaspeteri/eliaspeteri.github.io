import React from "react";

const Content = ({ date, location, position, details }) => {
    return (
        <>
            <div className="grid-container">{date}</div>
            <div className="grid-container">
                <div className="grid-item">
                    <strong>{position}</strong>
                </div>
                <div className="grid-item">{location}</div>
                <br />
                <div className="grid-item">{details}</div>
            </div>
        </>
    );
};

export default Content;
