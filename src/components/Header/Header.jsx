import React from "react";
import { string } from "prop-types";

const Header = ({ message }) => (
  <>
    <div className="grid-container">
      <h2>{message}</h2>
    </div>
    <div className="grid-container" />
  </>
);

export default Header;

Header.propTypes = {
  message: string.isRequired,
};
