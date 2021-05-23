import React from "react";
import DocumentTitle from "react-document-title";
import StyledAbout from "./About.styled";

const About = () => (
  <DocumentTitle title="About">
    <StyledAbout data-testid="aboutComponent" className="has-shadow light-bg">
      <h2>About me</h2>
      <p>
        Young and springy ICT Engineering student working on his Bachelor&apos;s
        degree in Software Engineering. Hails from Lapland but currently living
        in Tampere area.
      </p>
      <p>
        Looking for a full-time position in a snazzy software lab (that&apos;s
        you, employers) as studies come to a close.
      </p>
      <p>
        <b>
          Bonus points if you can offer a position to complete internships and
          perhaps a thesis!
        </b>
      </p>
    </StyledAbout>
  </DocumentTitle>
);

export default About;
