import React from "react";
import { string, array } from "prop-types";

const List = ({ header, items }) => (
  <>
    {header}
    <div className="grid-container inner">
      {items.map((skill) => (
        <div className="grid-item">{skill}</div>
      ))}
    </div>
  </>
);

export default List;

List.propTypes = {
  header: string.isRequired,
  items: array.isRequired,
};
