/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from "react";
import { string, array } from "prop-types";

const List = ({ header, items }) => (
  <>
    <div className="grid-container">{header}</div>
    <div className="grid-container inner">
      {items
        ? items.map((skill) => (
            <div key={skill} className="grid-item">
              {skill}
            </div>
          ))
        : null}
    </div>
  </>
);

export default List;

List.propTypes = {
  header: string,
  items: array,
};

List.defaultProps = {
  header: "",
  items: [],
};
