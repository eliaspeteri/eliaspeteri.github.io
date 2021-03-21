import { StyledAbout } from "./About.styled";

const About = () => {
    return (
        <StyledAbout data-testid="aboutComponent">
            <>
                <h2>About me</h2>
                <p>
                    22-year-old third-year ICT Engineering student working on
                    Bachelor's degree in Software Engineering. Hails from
                    Lapland but currently living in Tampere area. <br />
                    Strong minded, well motivated team player and reigning in
                    decent grades. Hunger for learning, inhales documentaries
                    and good shows. <br />
                    Looking for a part-time home, and hoping to eventually grow
                    to fulfill a full-time position as studies come to a close.
                    <br />
                    <b>
                        Bonus points if you can offer a position to complete
                        internships and perhaps a thesis!
                    </b>
                </p>
                <h2>Qualities</h2>
                <ul className="grid-container list">
                    <li className="grid-item list-item">Well motivated</li>
                    <li className="grid-item list-item">Strong minded</li>
                    <li className="grid-item list-item">Team player</li>
                    <li className="grid-item list-item">Heaps of potential</li>
                    <li className="grid-item list-item">Hunger for learning</li>
                    <li className="grid-item list-item">
                        Jack of all trades, master of some
                    </li>
                </ul>
                <h2>Interests</h2>
                <div className="grid-container">
                    <div className="grid-item">
                        <h3>Programming</h3>
                        <div className="grid-container">
                            <div className="grid-item">
                                <h4>Frontend</h4>
                                Mobile development (Learning Java + soon
                                Kotlin), React, JS + HTML + CSS, Bootstrap,
                                ES6+, Qt5, Responsive web design etc.
                            </div>
                            <div className="grid-item">
                                <h4>Backend</h4>
                                SQL (Postgres, MySQL), MongoDB, Node.js, axios,
                                express, Jest, REST APIs, C++.
                            </div>
                            <div className="grid-item">
                                <h4>Scripting</h4>
                                Python (BeautifulSoup, requests, pickle, pandas,
                                matplotlib in a pinch), bash.
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
            </>
        </StyledAbout>
    );
};
export default About;
