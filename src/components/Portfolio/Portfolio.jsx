import { StyledPortfolio } from "./Portfolio.styled";
import Mandelbrot from "./Mandelbrot";
import ShoppingCart from "./ShoppingCart";
import Calendar from "./Notes/Calendar";
import ErrorBoundary from "../ErrorBoundary";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";
const Project = () => {
    let { projectId } = useParams();
    switch (projectId) {
        case "notes":
            return <Calendar />;
        case "shoppingcart":
            return <ShoppingCart />;
        case "mandelbrot":
            return <Mandelbrot />;
        default:
            return <p>Requested Project ID: {projectId}</p>;
    }
};
const Portfolio = () => {
    const match = useRouteMatch();
    return (
        <StyledPortfolio data-testid="portfolioComponent">
            <Link to={`${match.url}`} id="closeElements">
                Close all
            </Link>

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
                <a
                    href="https://github.com/eliaspeteri/boid"
                    className="grid-item"
                >
                    Boid simulation
                </a>
            </div>
            <h2 data-testid="smallProjectElement">Small example projects</h2>
            <div className="grid-container">
                <Link to={`${match.url}/mandelbrot`} className="grid-item">
                    Mandelbrot
                </Link>
                <Link to={`${match.url}/shoppingcart`} className="grid-item">
                    Shopping cart
                </Link>
            </div>
            <h2 data-testid="bigProjectElement">Bigger example projects</h2>
            <div className="grid-container">
                <Link to={`${match.url}/notes`} className="grid-item">
                    Calendar
                </Link>
            </div>
            <Switch>
                <Route path={`${match.path}/:projectId`}>
                    <ErrorBoundary>
                        <Project />
                    </ErrorBoundary>
                </Route>
                <Route path={match.path}>
                    <p style={{ textAlign: "center" }}>
                        Please select a project.
                    </p>
                </Route>
            </Switch>
        </StyledPortfolio>
    );
};
export default Portfolio;
