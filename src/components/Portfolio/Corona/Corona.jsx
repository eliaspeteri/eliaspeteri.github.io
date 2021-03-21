import React, { useState } from "react";
const Corona = () => {
    const [data, setData] = useState({});
    const fetchData = () => {
        console.log("Fetching data from online...");
        let response = fetch(
            "https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/processedThlData"
        );
        if (response.ok) {
            console.log("Data fetched successfully");
            setData(response.json());
        }
    };
    return (
        <div>
            <button onClick={fetchData}>Fetch latest data</button>
            {data["confirmed"]}
        </div>
    );
};
export default Corona;
