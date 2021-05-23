import React from "react";
import { bool, func } from "prop-types";
import { NavLink } from "react-router-dom";
import StyledMenu from "./Menu.styled";

// eslint-disable-next-line no-unused-vars
const Menu = ({ open, setOpen }) => {
  const isHidden = !!open;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu data-testid="menuComponent" open={open} aria-hidden={!isHidden}>
      <NavLink to="/" data-testid="homeBtn" tabIndex={tabIndex}>
        Home
      </NavLink>
      <NavLink to="/about" data-testid="aboutBtn" tabIndex={tabIndex}>
        About
      </NavLink>
      <NavLink to="/portfolio" data-testid="portfolioBtn" tabIndex={tabIndex}>
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
  setOpen: func.isRequired,
};

export default Menu;
