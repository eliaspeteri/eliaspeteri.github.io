import React, { useState } from "react";
const Collatz = () => {
    const [number, setNumber] = useState(0);

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };
    const calculate = (n) => {
        let steps = 0;
        if (n === 1) return n;
        else {
            while (n > 1) {
                if (n % 2 === 0) {
                    n /= 2;
                } else {
                    n = n * 3 + 1;
                }
                steps++;
            }
        }
        return steps;
    };
    return (
        <>
            <h3>Collatz Conjecture</h3>
            Enter a number larger than 1. The number of steps to reach 1 will be
            calculated. If the number is even, it will be divided by 2. If the
            number is odd, it will be multiplied by 3 and 1 will be added.
            <br />
            <input onChange={handleNumberChange} />
            <div>Result: {calculate(number)} steps required</div>
        </>
    );
};
export default Collatz;
