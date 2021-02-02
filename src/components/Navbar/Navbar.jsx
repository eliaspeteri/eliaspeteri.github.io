import React from "react";
import { StyledNavbar } from "./Navbar.styled";

const Navbar = (props) => {
    return (
        <StyledNavbar>
            <button onClick={props.home}>Home</button>
            <button onClick={props.about}>About</button>
            <button onClick={props.portfolio}>Portfolio</button>
            <button onClick={props.contact}>Contact</button>
        </StyledNavbar>
    );
};

export default Navbar;
