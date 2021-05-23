import React from "react";
import { object } from "prop-types";

const NavBar = ({ totalCounters }) => (
  <div className="navbar navbar-light bg-light">
    <div className="navbar-brand">
      <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
      <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
        {totalCounters}
      </span>
      Items
    </div>
  </div>
);
export default NavBar;

NavBar.propTypes = {
  totalCounters: object.isRequired,
};
