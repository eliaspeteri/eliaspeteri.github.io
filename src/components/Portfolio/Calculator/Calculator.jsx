import { React, useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./Calculator.css";
const Calculator = () => {
    const isNumber = (item) => {
        return /[0-9]+/.test(item);
    };

    const operate = (numberOne, numberTwo, operation) => {
        const one = numberOne;
        const two = numberTwo;
        if (operation === "+") {
            return (one + two).toString();
        }
        if (operation === "-") {
            return (one - two).toString();
        }
        if (operation === "x") {
            return (one * two).toString();
        }
        if (operation === "÷") {
            return (one / two).toString();
        }
        throw Error(`Unknown operation ${operation}`);
    };

    const calculate = (buttonName) => {
        if (buttonName === "AC") {
            setTotal(null);
            setNext(null);
            setOperation(null);
        }
        if (isNumber(buttonName)) {
            if (buttonName === "0" && next === "0") {
                return {};
            }
            // If there is an operation, update next
            if (operation) {
                if (next) {
                    setNext(next + buttonName);
                }
                setNext(buttonName);
            }
            // If there is no operation, update next and clear the value
            if (next) {
                setNext(next + buttonName);
                setTotal(null);
            }
            setNext(buttonName);
            setTotal(null);
        }
        if (buttonName === "%") {
            if (operation && next) {
                const result = operate(total, next, operation);
                setTotal(result.toString());
                setNext(null);
                setOperation(null);
            }
            if (next) {
                setNext(next.toString());
            }
            return {};
        }
        if (buttonName === ".") {
            if (next) {
                // ignore a . if the next number already has one
                if (next.includes(".")) {
                    return {};
                }
                setNext(next + ".");
            }
            setNext("0.");
        }
        if (buttonName === "=") {
            if (next && operation) {
                setTotal(operate(total, next, operation));
                setNext(null);
                setOperation(null);
            } else {
                // '=' with no operation, nothing to do
                return {};
            }
        }
        if (buttonName === "+/-") {
            if (next) {
                setNext(-1 * parseFloat(next).toString());
            }
            if (total) {
                setTotal(-1 * parseFloat(total).toString());
            }
            return {};
        }

        // Button must be an operation

        // When the user presses an operation button without having entered
        //  a number first, do nothing.
        if (!next && !total) {
            return {};
        }

        // User pressed an operation button and there is an existing operation
        if (operation) {
            setTotal(operate(total, next, operation));
            setNext(null);
            setOperation(buttonName);
        }
        // no operation yet but the user has typed one

        // The user hasn't typed a number yet, just save the operation
        if (!next) {
            setOperation(buttonName);
        }
        // save the operation and shift 'next' into 'total'
        setTotal(next);
        setNext(null);
        setOperation(buttonName);
    };

    const [total, setTotal] = useState(null);
    const [next, setNext] = useState(null);
    const [operation, setOperation] = useState(null);

    const handleClick = (buttonName) => {
        calculate(buttonName);
    };
    return (
        <div className="component-app">
            <Display value={next || total || "0"} />
            <ButtonPanel clickHandler={handleClick} />
        </div>
    );
};
export default Calculator;
