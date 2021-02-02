import React from "react";
import { StyledNavbar } from "./Navbar.styled";

const Navbar = (props) => {
    return (
        <StyledNavbar>
            <button onClick={props.homeVisibility}>Home</button>
            <button onClick={props.aboutVisibility}>About</button>
            <button onClick={props.portfolioVisibility}>Portfolio</button>
            <button onClick={props.contactVisibility}>Contact</button>
        </StyledNavbar>
    );
};

export default Navbar;
