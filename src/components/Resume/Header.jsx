import React from "react";
import { string } from "prop-types";

const Header = ({ message }) => (
  <>
    <div className="grid-container">
      <h1>{message}</h1>
    </div>
    <div className="grid-container" />
  </>
);

export default Header;

Header.propTypes = {
  message: string.isRequired,
};
