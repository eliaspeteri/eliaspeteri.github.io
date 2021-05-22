import React from "react";
import { string } from "prop-types";

// eslint-disable-next-line object-curly-newline
const Content = ({ date, location, position, details }) => (
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

export default Content;

Content.propTypes = {
  date: string.isRequired,
  location: string.isRequired,
  position: string.isRequired,
  details: string.isRequired,
};
