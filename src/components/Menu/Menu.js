import React from "react";
import { bool } from "prop-types";
import { NavLink } from "react-router-dom";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, setOpen, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu
            data-testid="menuComponent"
            open={open}
            aria-hidden={!isHidden}
            {...props}
        >
            <NavLink to="/" data-testid="homeBtn" tabIndex={tabIndex}>
                Home
            </NavLink>
            <NavLink to="/about" data-testid="aboutBtn" tabIndex={tabIndex}>
                About
            </NavLink>
            <NavLink
                to="/portfolio"
                data-testid="portfolioBtn"
                tabIndex={tabIndex}
            >
                Portfolio
            </NavLink>
            <NavLink to="/contact" data-testid="contactBtn" tabIndex={tabIndex}>
                Contact
            </NavLink>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
