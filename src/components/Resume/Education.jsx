import React from "react";

const Education = ({ date, school, program, major, details }) => {
    return (
        <>
            <div className="grid-container">{date}</div>
            <div className="grid-container">
                <div className="grid-item">
                    <strong>{school}</strong>
                </div>
                <div className="grid-item">{program}</div>
                <div className="grid-item">
                    <em>Major in {major}</em>
                </div>

                {details ? (
                    <ul>
                        {details.map((item) => (
                            <li className="grid-item">{item}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </>
    );
};

export default Education;
