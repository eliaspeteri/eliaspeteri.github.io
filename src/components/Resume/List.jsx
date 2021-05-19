import React from "react";

const List = ({ header, items }) => {
    return (
        <>
            {header}
            <div className="grid-container inner">
                {items.map((skill) => (
                    <div className="grid-item">{skill}</div>
                ))}
            </div>
        </>
    );
};

export default List;
