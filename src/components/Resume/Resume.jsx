import React from "react";
import { StyledResume } from "./Resume.styled";
import Header from "./Header";
import Experience from "./Experience";
import portrait from "../../resources/img/portrait.png";
import List from "./List";
import Education from "./Education";
import ContactInfo from "./ContactInfo";
import education from "../../resources/data/education.json";
import experience from "../../resources/data/experience.json";
import skills from "../../resources/data/skills.json";
import keywords from "../../resources/data/keywords.json";
import languages from "../../resources/data/languages.json";
const Resume = () => {
    return (
        <StyledResume
            data-testid="resumeComponent"
            className="has-shadow light-bg"
        >
            <div className="grid-container">
                <img src={portrait} alt="portrait"></img>
            </div>
            {/* Contact Information */}
            <ContactInfo
                name="Elias Peteri"
                location="Tampere, Finland"
                email="elias.peteri@tuni.fi"
                gitHub="https://github.com/eliaspeteri"
                linkedIn="https://linkedin.com/in/eliaspeteri"
            />
            {/* Education */}
            <Header message="Education" />
            {education.schools.map((item) => (
                <Education
                    date={item.date}
                    school={item.school}
                    program={item.program}
                    major={item.major}
                    details={item.details}
                />
            ))}
            {/* Experience */}
            <Header message="Experience" />
            {experience.workplaces.map((item) => (
                <Experience
                    date={item.date}
                    location={item.location}
                    position={item.position}
                    details={item.details}
                />
            ))}
            {/* Skills */}
            <Header message="Skills" />
            {skills.skillset.map((item) => (
                <List header={item.header} items={item.skills} />
            ))}
            {/* Languages */}
            <Header message="Languages" />
            {languages.languageset.map((item) => (
                <List header={item.header} items={item.languages} />
            ))}
            <List header={keywords.header} items={keywords.keywords} />
        </StyledResume>
    );
};

export default Resume;
