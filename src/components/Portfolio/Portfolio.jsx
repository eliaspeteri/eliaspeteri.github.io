import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import React from "react";
import DocumentTitle from "react-document-title";
import StyledPortfolio from "./Portfolio.styled";
// import Mandelbrot from "./Mandelbrot";
// import ShoppingCart from "./ShoppingCart";
import Calendar from "./Notes/Calendar";
import ErrorBoundary from "../ErrorBoundary";

const Project = () => {
  const { projectId } = useParams();
  switch (projectId) {
    case "notes":
      return <Calendar />;
    // case "shoppingcart":
    //   return <ShoppingCart />;
    // case "mandelbrot":
    //   return <Mandelbrot />;
    default:
      return (
        <p>
          Requested Project ID:
          {projectId}
        </p>
      );
  }
};
const Portfolio = () => {
  const match = useRouteMatch();
  return (
    <DocumentTitle title="Portfolio">
      <StyledPortfolio
        data-testid="portfolioComponent"
        className="has-shadow light-bg"
      >
        <Link to={`${match.url}`} id="closeElements">
          Close all
        </Link>

        <h1 data-testid="githubElement">GitHub</h1>
        <div className="grid-container">
          <a href="https://github.com/eliaspeteri/notes" className="grid-item">
            Notes
          </a>

          <a
            href="https://github.com/eliaspeteri/THL-Corona"
            className="grid-item"
          >
            Coronavirus CLI
          </a>
          <a
            href="https://github.com/eliaspeteri/taximap"
            className="grid-item"
          >
            Taximap
          </a>
          <a href="https://github.com/eliaspeteri/boid" className="grid-item">
            Boid simulation
          </a>
          <a
            href="https://github.com/eliaspeteri/FullStackHelsinkiUni"
            className="grid-item"
          >
            Full Stack Course
          </a>
        </div>
        <h1 data-testid="smallProjectElement">Small example projects</h1>
        <div className="grid-container">
          {/* <Link to={`${match.url}/mandelbrot`} className="grid-item">
          Mandelbrot
        </Link> */}
          {/* <Link to={`${match.url}/shoppingcart`} className="grid-item">
          Shopping cart
        </Link> */}
        </div>
        <h1 data-testid="bigProjectElement">Bigger example projects</h1>
        <div className="grid-container">
          <Link to={`${match.url}/notes`} className="grid-item">
            Calendar
          </Link>
        </div>
        <Switch>
          <Route path={`${match.path}/:projectId`}>
            <ErrorBoundary>
              <div className="project-container">
                <Project />
              </div>
            </ErrorBoundary>
          </Route>
          <Route path={match.path}>
            <p style={{ textAlign: "center" }}>Please select a project.</p>
          </Route>
        </Switch>
      </StyledPortfolio>
    </DocumentTitle>
  );
};
export default Portfolio;
