import React from "react";

const ContactInfo = ({ name, location, email, gitHub, linkedIn }) => {
    return (
        <div className="grid-container">
            <div className="grid-item">👋&nbsp;{name}</div>
            <div className="grid-item">📌&nbsp;{location}</div>
            <div className="grid-item">
                <a href={`mailto:${email}`}>📯&nbsp;{email}</a>
            </div>
            <div className="grid-item">
                <a href={`${gitHub}`}>🤓&nbsp;GitHub</a>
            </div>
            <div className="grid-item">
                <a href={`${linkedIn}`}>👔&nbsp;LinkedIn</a>
            </div>
        </div>
    );
};

export default ContactInfo;
