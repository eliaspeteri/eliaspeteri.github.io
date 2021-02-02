import React from "react";
import { bool } from "prop-types";
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
            <button
                data-testid="homeBtn"
                onClick={props.home}
                tabIndex={tabIndex}
            >
                Home
            </button>
            <button
                data-testid="aboutBtn"
                onClick={props.about}
                tabIndex={tabIndex}
            >
                About
            </button>
            <button
                data-testid="portfolioBtn"
                onClick={props.portfolio}
                tabIndex={tabIndex}
            >
                Portfolio
            </button>
            <button
                data-testid="contactBtn"
                onClick={props.contact}
                tabIndex={tabIndex}
            >
                Contact
            </button>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
