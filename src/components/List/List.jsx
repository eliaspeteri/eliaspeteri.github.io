import React from "react";
import { string, array } from "prop-types";

const List = ({ header, items }) => (
  <>
    <div className="grid-container">{header}</div>
    <div className="grid-container inner">
      {items.map((skill) => (
        <div key={skill} className="grid-item">
          {skill}
        </div>
      ))}
    </div>
  </>
);

export default List;

List.propTypes = {
  header: string.isRequired,
  items: array.isRequired,
};
