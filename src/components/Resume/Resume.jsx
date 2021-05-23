/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from "react";
import StyledResume from "./Resume.styled";
import Header from "../Header";
import Experience from "./Experience";
import portrait from "../../resources/img/portrait.png";
import List from "../List";
import Education from "./Education";
import ContactInfo from "./ContactInfo";
import useResource from "../../hooks/useResource";

const apiUrl = "https://homepage-back.herokuapp.com/api";

const Resume = () => {
  const educationService = useResource(`${apiUrl}/school`);
  const experienceService = useResource(`${apiUrl}/work`);
  const keywordService = useResource(`${apiUrl}/keywords`);
  const skillService = useResource(`${apiUrl}/skills`);
  const languageService = useResource(`${apiUrl}/languages`);
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  const [keywords, setKeywords] = useState({});
  const [skills, setSkills] = useState({});
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    educationService.getAll().then((response) => {
      if (response.status === 200) {
        setEducation(response.data);
      }
    });
  }, []);

  useEffect(() => {
    experienceService.getAll().then((response) => {
      if (response.status === 200) {
        setExperience(response.data);
      }
    });
  }, []);

  useEffect(() => {
    keywordService.getAll().then((response) => {
      if (response.status === 200) {
        setKeywords(response.data);
      }
    });
  }, []);

  useEffect(() => {
    skillService.getAll().then((response) => {
      if (response.status === 200) {
        setSkills(response.data);
      }
    });
  }, []);

  useEffect(() => {
    languageService.getAll().then((response) => {
      if (response.status === 200) {
        setLanguages(response.data);
      }
    });
  }, []);

  // eslint-disable-next-line react/jsx-indent
  return (
    <StyledResume data-testid="resumeComponent" className="has-shadow light-bg">
      <div className="grid-container">
        <img src={portrait} alt="portrait" className="has-shadow" />
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
      {education.length > 0
        ? education.map((item) => (
            <Education
              key={item.id}
              date={item.date}
              school={item.school}
              program={item.program}
              major={item.major}
              details={item.details}
            />
          ))
        : null}
      {/* Experience */}
      <Header message="Experience" />
      {experience.length > 0
        ? experience.map((item) => (
            <Experience
              key={item.id}
              date={item.date}
              location={item.location}
              position={item.position}
              details={item.details}
            />
          ))
        : null}
      {/* Skills */}
      <Header message="Skills" />
      {skills.length > 0
        ? skills.map((item) => (
            <List key={item.id} header={item.header} items={item.skills} />
          ))
        : null}
      {/* Languages */}
      <Header message="Languages" />
      {languages.length > 0
        ? languages.map((item) => (
            <List key={item.id} header={item.header} items={item.languages} />
          ))
        : null}
      <List header={keywords.header} items={keywords.keywords} />
    </StyledResume>
  );
};

export default Resume;
