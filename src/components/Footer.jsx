import React from "react";
import linkedin from "../resources/img/linkedin.png";

const Footer = () => {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/eliaspeteri">
                <img src={linkedin} alt="linkedin"></img>
            </a>
            <em>Built with</em> ❤ <em>using</em> ⚛&nbsp;
            <em>by Elias Peteri in the year 2021</em>
        </footer>
    );
};

export default Footer;
