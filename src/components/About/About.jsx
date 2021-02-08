import { StyledAbout } from "./About.styled";

const About = () => {
    return (
        <StyledAbout data-testid="aboutComponent">
            <div>
                <h2>About me</h2>
                <p>
                    22-year-old third-year ICT Engineering student working on
                    Bachelor's degree in Software Engineering. Hails from
                    Lapland but currently living in Tampere area. Strong minded,
                    well motivated team player and reigning in decent grades.
                    Hunger for learning, inhales documentaries and good shows.
                    Looking for a part-time home, and hoping to eventually grow
                    to fulfill a full-time position when time is right.
                </p>
                <h2>Interests</h2>
                <div className="grid-container">
                    <div className="grid-item">
                        <h3>Programming</h3>
                        <div className="grid-container">
                            <div className="grid-item">
                                <h4>Frontend</h4>
                                Mobile development (Learning Java + soon
                                Kotlin), React, JS + HTML + CSS, Qt5.
                            </div>
                            <div className="grid-item">
                                <h4>Backend</h4>
                                SQL (Postgres, MySQL), MongoDB, Node.js, axios,
                                express, C++.
                            </div>
                            <div className="grid-item">
                                <h4>Scripting</h4>
                                Python (BeautifulSoup, requests, pickle,
                                pandas), bash.
                            </div>
                            <div className="grid-item">
                                <h4>Miscellaneous</h4>
                                Software production, DevOps, Git(Hub), Linux
                                (Redhat), Blender.
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <h3>Video games</h3>
                        <p>
                            Cities: Skylines, Empire: Total War, Red Dead
                            Redemption 2, The Grand Theft Auto Series, Sea of
                            Thieves, Silent Hunter III.
                        </p>
                    </div>
                    <div className="grid-item">
                        <h3>Food</h3>
                        <p>
                            East Asian food culture, specifically Chinese
                            kitchen.
                        </p>
                    </div>
                    <div className="grid-item">
                        <h3>Music</h3>
                        <p>
                            Declan McKenna, The Growlers, MGMT, Culture Club,
                            Boney M. Kaito Shoma, Bonnie Tyler, Perturbator,
                            Carpenter Brut, Dance With the Dead, Foster the
                            People, Tame Impala, Paramore, The Head and the
                            Heart, Fruit Bats, Milky Chance, Two Door Cinema
                            Club, Madeon, Porter Robinson, The Regrettes.
                        </p>
                    </div>
                    <div className="grid-item">
                        <h3>Other</h3>
                        <p>
                            Avgeek, love everything with an engine and/or 4+
                            wheels.
                        </p>
                    </div>
                </div>
            </div>
        </StyledAbout>
    );
};
export default About;
