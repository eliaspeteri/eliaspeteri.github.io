import React from "react";
import { string } from "prop-types";

// eslint-disable-next-line object-curly-newline
const ContactInfo = ({ name, location, email, gitHub, linkedIn }) => (
  <div className="grid-container">
    <div className="grid-item">
      👋&nbsp;
      {name}
    </div>
    <div className="grid-item">
      📌&nbsp;
      {location}
    </div>
    <div className="grid-item">
      <a href={`mailto:${email}`}>
        📯&nbsp;
        {email}
      </a>
    </div>
    <div className="grid-item">
      <a href={`${gitHub}`}>🤓&nbsp;GitHub</a>
    </div>
    <div className="grid-item">
      <a href={`${linkedIn}`}>👔&nbsp;LinkedIn</a>
    </div>
  </div>
);

export default ContactInfo;

ContactInfo.propTypes = {
  name: string.isRequired,
  location: string.isRequired,
  email: string.isRequired,
  gitHub: string.isRequired,
  linkedIn: string.isRequired,
};
