import React, { useState } from "react";
// Pi up to 100 decimals
const FindPitoNth = () => {
    const [decimals, setDecimals] = useState(2);
    const pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;

    const handleDecimalChange = (event) => {
        setDecimals(event.target.value);
    };

    return (
        <>
            <h3>Find pi to Nth digit</h3>
            Enter a whole number and the program will generate PI up to that
            amount of decimals. Maximum decimals is set to 50. <br />
            <input onChange={handleDecimalChange} />
            <div>
                Result: {decimals <= 50 ? pi.toFixed(decimals) : pi.toFixed(50)}
            </div>
        </>
    );
};
export default FindPitoNth;
