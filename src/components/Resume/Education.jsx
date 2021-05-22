import React from "react";
import { string } from "prop-types";

// eslint-disable-next-line object-curly-newline
const Education = ({ date, school, program, major, details }) => (
  <>
    <div className="grid-container">{date}</div>
    <div className="grid-container">
      <div className="grid-item">
        <strong>{school}</strong>
      </div>
      <div className="grid-item">{program}</div>
      <div className="grid-item">
        <em>
          Major in
          {major}
        </em>
      </div>

      {details ? (
        <ul>
          {details.map((item) => (
            <li className="grid-item">{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </>
);

export default Education;

Education.propTypes = {
  date: string.isRequired,
  school: string.isRequired,
  program: string.isRequired,
  major: string.isRequired,
  details: string.isRequired,
};
