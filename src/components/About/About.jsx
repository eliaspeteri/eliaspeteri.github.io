import { StyledAbout } from "./About.styled";

const About = () => {
    return (
        <StyledAbout
            data-testid="aboutComponent"
            className="has-shadow light-bg"
        >
            <>
                <h2>About me</h2>
                <p>
                    ICT Engineering student working on Bachelor's degree in
                    Software Engineering. Hails from Lapland but currently
                    living in Tampere area.
                </p>
                <p>
                    Looking for a part-time home, and hoping to eventually grow
                    to fulfill a full-time position as studies come to a close.
                </p>
                <p>
                    <b>
                        Bonus points if you can offer a position to complete
                        internships and perhaps a thesis!
                    </b>
                </p>
                <ul className="list-container">
                    <h2>Qualities</h2>
                    <li className="list-item">Good leader</li>
                    <li className="list-item">Well motivated</li>
                    <li className="list-item">Strong minded</li>
                    <li className="list-item">Team player</li>
                    <li className="list-item">Heaps of potential</li>
                    <li className="list-item">Hunger for learning</li>
                    <li className="list-item">
                        Jack of all trades, master of some
                    </li>
                </ul>
                <h2>Skills</h2>
                <h3>Frontend</h3>
                React, JS/HTML/CSS.
                <h3>Backend</h3>
                MongoDB, SQL (Postgres), Node.js, axios, express, Jest, REST
                APIs.
                <h3>Scripting</h3>
                Python, shell.
                <h3>Miscellaneous</h3>
                Software production, Git, Linux (Redhat).
            </>
        </StyledAbout>
    );
};
export default About;
