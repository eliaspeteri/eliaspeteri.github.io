import { FindetoNth, FindPitoNth, Collatz, CaesarCipher } from "./easyProjects";
import { useState } from "react";
import { StyledPortfolio } from "./Portfolio.styled";
const Portfolio = () => {
    const [easyOpen, setEasyOpen] = useState(false);
    const [gitHubOpen, setGitHubOpen] = useState(true);
    // const [mediumOpen, setMediumOpen] = useState(true);
    const handleEasyVisibility = () => {
        if (easyOpen) setEasyOpen(false);
        else setEasyOpen(true);
    };
    const handleGitHubVisibility = () => {
        if (gitHubOpen) setGitHubOpen(false);
        else setGitHubOpen(true);
    };
    // const handleMediumVisibility = () => {
    //     if (mediumOpen) setMediumOpen(false);
    //     else setMediumOpen(true);
    // };
    return (
        <StyledPortfolio open={easyOpen} data-testid="portfolioComponent">
            <h2 onClick={handleGitHubVisibility}>GitHub</h2>
            {gitHubOpen ? (
                <div class="grid-container">
                    <a
                        href="https://github.com/eliaspeteri/notes"
                        class="grid-item"
                    >
                        Notes
                    </a>
                    <a
                        href="https://github.com/eliaspeteri/THL-Corona"
                        class="grid-item"
                    >
                        THL-Corona
                    </a>
                    <a
                        href="https://github.com/eliaspeteri/taximap"
                        class="grid-item"
                    >
                        Taximap
                    </a>
                    <a
                        href="https://github.com/eliaspeteri/mandelbrot"
                        class="grid-item"
                    >
                        Mandelbrot
                    </a>
                    <a
                        href="https://github.com/eliaspeteri/boid"
                        class="grid-item"
                    >
                        Boid simulation
                    </a>
                </div>
            ) : null}
            <h2 onClick={handleEasyVisibility}>Easy projects</h2>
            {easyOpen ? (
                <div class="grid-container">
                    <div class="grid-item">
                        <FindPitoNth />
                    </div>
                    <div class="grid-item">
                        <FindetoNth />
                    </div>
                    <div class="grid-item">
                        <Collatz />
                    </div>
                    {/* <div class="grid-item">
                        <CaesarCipher />
                    </div> */}
                </div>
            ) : null}
        </StyledPortfolio>
    );
};
export default Portfolio;
