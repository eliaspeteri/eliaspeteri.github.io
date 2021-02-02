import { StyledAbout } from "./About.styled";

const About = ({ open, setOpen, ...props }) => {
    return (
        <StyledAbout>
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
                <div class="grid-container">
                    <div class="grid-item">
                        <h3>Programming</h3>
                        <div class="grid-container">
                            <div class="grid-item">
                                <h4>Frontend</h4>
                                Mobile development (Learning Java + soon
                                Kotlin), React, JS + HTML + CSS, Qt5.
                            </div>
                            <div class="grid-item">
                                <h4>Backend</h4>
                                SQL (Postgres, MySQL), MongoDB, Node.js, axios,
                                express, C++.
                            </div>
                            <div class="grid-item">
                                <h4>Scripting</h4>
                                Python, bash.
                            </div>
                            <div class="grid-item">
                                <h4>Miscellaneous</h4>
                                Software production, DevOps, Git(Hub), Linux
                                (Redhat).
                            </div>
                        </div>
                    </div>
                    <div class="grid-item">
                        <h3>Video games</h3>
                        <p>
                            Cities: Skylines, Empire: Total War, Red Dead
                            Redemption 2, The Grand Theft Auto Series, Sea of
                            Thieves, Silent Hunter III.
                        </p>
                    </div>
                    <div class="grid-item">
                        <h3>Food</h3>
                        <p>
                            East Asian food culture, specifically Chinese
                            kitchen.
                        </p>
                    </div>
                    <div class="grid-item">
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
                </div>
            </div>
        </StyledAbout>
    );
};
export default About;
