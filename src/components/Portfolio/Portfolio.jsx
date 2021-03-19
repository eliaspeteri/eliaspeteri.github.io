import { StyledPortfolio } from "./Portfolio.styled";
import Taximap from "./Taximap/taximap";
import Mandelbrot from "./Mandelbrot/Mandelbrot";
import Flock from "./Boid/Flock";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
const Project = () => {
    let { projectId } = useParams();
    if (projectId == "taximap") {
        return <Taximap />;
    } else if (projectId == "mandelbrot") return <Mandelbrot />;
    else if (projectId == "flock") return <Flock />;
    else return <>Requested Project ID: {projectId}</>;
};
const Portfolio = () => {
    let match = useRouteMatch();
    return (
        <StyledPortfolio data-testid="portfolioComponent">
            <h2 data-testid="githubElement">GitHub</h2>
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
                {/* <a
                    href="https://github.com/eliaspeteri/mandelbrot"
                    className="grid-item"
                >
                    Mandelbrot
                </a> */}
                <Link to={`${match.url}/mandelbrot`}>Mandelbrot</Link>
                {/* <a
                    href="https://github.com/eliaspeteri/boid"
                    className="grid-item"
                >
                    Boid simulation
                </a> */}
                <Link to={`${match.url}/flock`}>Boid simulation</Link>
            </div>
            <Switch>
                <Route path={`${match.path}/:projectId`}>
                    <Project />
                </Route>
                <Route path={match.path}>
                    <p>Please select a project.</p>
                </Route>
            </Switch>
        </StyledPortfolio>
    );
};
export default Portfolio;
