import React from "react";
// import { useOnClickOutside } from "../../hooks";
import { NavLink } from "react-router-dom";
// import { Burger, Menu } from "../index";
// import Focuslock from "react-focus-lock";

import StyledNavbar from "./Navbar.styled";

const Navbar = () => (
  // const [burgerOpen, setBurgerOpen] = useState(false);
  // const node = useRef();
  // const menuId = "main-menu";

  // useOnClickOutside(node, () => setBurgerOpen(false));
  <StyledNavbar data-testid="navComponent" className="dark-bg">
    {/* <div ref={node}>
                <Focuslock disabled={!burgerOpen}>
                    <Burger
                        open={burgerOpen}
                        setOpen={setBurgerOpen}
                        aria-controls={menuId}
                    />
                    <Menu
                        setOpen={setBurgerOpen}
                        id={menuId}
                        open={burgerOpen}
                    />
                </Focuslock>
            </div> */}
    <nav>
      <NavLink to="/" data-testid="homeBtn">
        Home
      </NavLink>
      <NavLink to="/about" data-testid="aboutBtn">
        About
      </NavLink>
      <NavLink to="/resume" data-testid="resumeBtn">
        Resume
      </NavLink>
      <NavLink to="/portfolio" data-testid="portfolioBtn">
        Portfolio
      </NavLink>
      <NavLink to="/contact" data-testid="contactBtn">
        Contact
      </NavLink>
    </nav>
  </StyledNavbar>
);

export default Navbar;
