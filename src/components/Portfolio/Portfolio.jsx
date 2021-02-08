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
            <h2 onClick={handleGitHubVisibility} data-testid="githubElement">
                GitHub
            </h2>
            {gitHubOpen ? (
                <div className="grid-container">
                    <a
                        href="https://github.com/eliaspeteri/notes"
                        className="grid-item"
                    >
                        Notes
                    </a>
                    <a
                        href="https://github.com/eliaspeteri/THL-Corona"
                        className="grid-item"
                    >
                        THL-Corona
                    </a>
                    <a
                        href="https://github.com/eliaspeteri/taximap"
                        className="grid-item"
                    >
                        Taximap
                    </a>
                    <a
                        href="https://github.com/eliaspeteri/mandelbrot"
                        className="grid-item"
                    >
                        Mandelbrot
                    </a>
                    <a
                        href="https://github.com/eliaspeteri/boid"
                        className="grid-item"
                    >
                        Boid simulation
                    </a>
                </div>
            ) : null}
            <h2 onClick={handleEasyVisibility} data-testid="easyProjElement">
                Easy projects
            </h2>
            {easyOpen ? (
                <div className="grid-container">
                    <div className="grid-item">
                        <FindPitoNth />
                    </div>
                    <div className="grid-item">
                        <FindetoNth />
                    </div>
                    <div className="grid-item">
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
