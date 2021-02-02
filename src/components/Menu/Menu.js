import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, setOpen, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <button onClick={props.home} tabIndex={tabIndex}>
                Home
            </button>
            <button onClick={props.about} tabIndex={tabIndex}>
                About
            </button>
            <button onClick={props.portfolio} tabIndex={tabIndex}>
                Portfolio
            </button>
            <button onClick={props.contact} tabIndex={tabIndex}>
                Contact
            </button>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
