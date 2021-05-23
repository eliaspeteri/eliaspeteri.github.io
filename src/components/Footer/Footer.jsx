import React from "react";
import linkedin from "../../resources/img/linkedin.png";

const Footer = () => (
  <footer>
    <a href="https://www.linkedin.com/in/eliaspeteri">
      <img src={linkedin} alt="linkedin" />
    </a>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    <em>Built with</em>&nbsp;❤<em>using</em>
    ⚛&nbsp;
    <em>by Elias Peteri in the year 2021</em>
  </footer>
);

export default Footer;
