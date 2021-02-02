import React from "react";
import { StyledNavbar } from "./Navbar.styled";

const Navbar = (props) => {
    return (
        <StyledNavbar data-testid="navComponent">
            <button data-testid="homeBtn" onClick={props.home}>
                Home
            </button>
            <button data-testid="aboutBtn" onClick={props.about}>
                About
            </button>
            <button data-testid="portfolioBtn" onClick={props.portfolio}>
                Portfolio
            </button>
            <button data-testid="contactBtn" onClick={props.contact}>
                Contact
            </button>
        </StyledNavbar>
    );
};

export default Navbar;
