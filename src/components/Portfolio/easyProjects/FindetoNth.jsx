import React, { useState } from "react";
// e up to 100 decimals
const FindetoNth = () => {
    const [decimals, setDecimals] = useState(2);
    const euler = 2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274;

    const handleDecimalChange = (event) => {
        setDecimals(event.target.value);
    };

    return (
        <>
            <h3>Find e to Nth digit</h3>
            Enter a whole number and the program will generate pi up to that
            amount of decimals. Maximum decimals is set to 50. <br />
            <input onChange={handleDecimalChange} />
            <div>
                Result:{" "}
                {decimals <= 50 ? euler.toFixed(decimals) : euler.toFixed(50)}
            </div>
        </>
    );
};
export default FindetoNth;
