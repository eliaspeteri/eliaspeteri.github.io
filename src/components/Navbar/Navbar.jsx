import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import { StyledNavbar } from "./Navbar.styled";

const Navbar = () => {
    return (
        <StyledNavbar data-testid="navComponent">
            <Router>
                <div>
                    <nav>
                        <Link to="/" data-testid="homeBtn">
                            Home
                        </Link>
                        <Link to="/about" data-testid="aboutBtn">
                            About
                        </Link>
                        <Link to="/portfolio" data-testid="portfolioBtn">
                            Portfolio
                        </Link>
                        <Link to="/contact" data-testid="contactBtn">
                            Contact
                        </Link>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">Hello.</Route>
                    </Switch>
                </div>
            </Router>
        </StyledNavbar>
    );
};

export default Navbar;
