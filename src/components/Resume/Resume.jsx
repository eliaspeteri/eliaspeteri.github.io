import React, { Component } from "react";
import { StyledResume } from "./Resume.styled";
import portrait from "../../resources/img/portrait.png";
class Resume extends Component {
    render() {
        return (
            <StyledResume>
                <div className="grid-container">
                    <img src={portrait} alt="portrait"></img>
                </div>
                <div className="grid-container">
                    <div className="grid-item">👋&nbsp;Elias Peteri</div>
                    <div className="grid-item">📌&nbsp;Tampere, Finland</div>
                    <div className="grid-item">
                        <a href="mailto:elias.peteri@tuni.fi">
                            📯&nbsp;elias.peteri@tuni.fi
                        </a>
                    </div>
                    <div className="grid-item">
                        <a href="https://www.github.com/eliaspeteri">
                            🤓&nbsp;GitHub
                        </a>
                    </div>
                    <div className="grid-item">
                        <a href="https//www.linkedin.com/in/eliaspeteri">
                            👔&nbsp;LinkedIn
                        </a>
                    </div>
                </div>
                <div className="grid-container">
                    <h1>Education</h1>
                </div>
                <div className="grid-container"></div>
                <div className="grid-container">2018-2022</div>
                <div className="grid-container">
                    <div className="grid-item">
                        Tampere University of Applied Sciences
                    </div>
                    <div className="grid-item">
                        <em>Bachelor of ICT Engineering</em>
                    </div>
                    <div className="grid-item">
                        Major in Software Engineering
                    </div>
                    <ul>
                        <li className="grid-item">
                            Object-Oriented Programming
                        </li>
                        <li className="grid-item">
                            Data Structures and Algorithms
                        </li>
                        <li className="grid-item">Operating Systems</li>
                        <li className="grid-item">Databases</li>
                    </ul>
                </div>
                <div className="grid-container">2014-2018</div>
                <div className="grid-container">
                    <div className="grid-item">
                        Sammon keskuslukio Central High School
                    </div>
                    <div className="grid-item">
                        <em>Major in Media Studies</em>
                    </div>
                </div>
                <div className="grid-container">
                    <h1>Experience</h1>
                </div>
                <div className="grid-container"></div>
                <div className="grid-container">May 2019 - Jul 2019</div>
                <div className="grid-container">
                    <div className="grid-item">City of Tampere</div>
                    <div className="grid-item">
                        <em>Office Employee</em>
                    </div>
                    <div className="grid-item">
                        Preparing visit lists and providing support for elderly
                        home care nurses.
                    </div>
                </div>
                <div className="grid-container">Nov 2018 - Present</div>
                <div className="grid-container">
                    <div className="grid-item">Mielen Ry</div>
                    <div className="grid-item">
                        <em>Volunteer</em>
                    </div>
                    <div className="grid-item">
                        Facilitating hangouts for people with difficulties
                        leaving their residence.
                    </div>
                </div>
                <div className="grid-container">
                    <h1>Skills</h1>
                </div>
                <div className="grid-container"></div>
                <div className="grid-container">Software</div>
                <div className="grid-container inner">
                    <div className="grid-item">Visual Studio Code</div>
                    <div className="grid-item">Microsoft Office Suite</div>
                    <div className="grid-item">Google Docs</div>
                    <div className="grid-item">Zoom</div>
                </div>
                <div className="grid-container">Languages</div>
                <div className="grid-container inner">
                    <div className="grid-item">CSS/HTML</div>
                    <div className="grid-item">JS</div>
                    <div className="grid-item">Jest</div>
                    <div className="grid-item">SQL</div>
                    <div className="grid-item">Python</div>
                    <div className="grid-item">Shell</div>
                </div>
                <div className="grid-container">Frameworks and Libraries</div>
                <div className="grid-container inner">
                    <div className="grid-item">React</div>
                    <div className="grid-item">Node.js</div>
                    <div className="grid-item">Express</div>
                    <div className="grid-item">Axios</div>
                    <div className="grid-item">Beautiful Soup</div>
                    <div className="grid-item">Requests</div>
                </div>
                <div className="grid-container">Keywords</div>
                <div className="grid-container inner">
                    <div className="grid-item">XML, JSON, CSV, YML</div>
                    <div className="grid-item">REST API</div>
                    <div className="grid-item">Responsive design</div>
                    <div className="grid-item">Critical thinking</div>
                    <div className="grid-item">Teamwork oriented</div>
                    <div className="grid-item">Analytical skills</div>
                    <div className="grid-item">Decision-making</div>
                    <div className="grid-item">Reliability</div>
                    <div className="grid-item">Motivated</div>
                    <div className="grid-item">Potential</div>
                    <div className="grid-item">Always learning</div>
                </div>
            </StyledResume>
        );
    }
}

export default Resume;
