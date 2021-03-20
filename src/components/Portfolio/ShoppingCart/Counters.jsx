import React from "react";
import Counter from "./Counters";
import ErrorBoundary from "../../ErrorBoundary";

const Counters = (props) => {
    console.log("Rendering Counters");
    console.log(props.counter);
    console.table(props.counters);
    return (
        <ErrorBoundary>
            <div>
                <button
                    className="btn btn-success m-2"
                    onClick={props.onReset}
                    disabled={props.counters.length === 0 ? "disabled" : ""}
                >
                    <i className="fa fa-refresh" aria-hidden="true" />
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={props.onRestart}
                    disabled={props.counters.length !== 0 ? "disabled" : ""}
                >
                    <i className="fa fa-recycle" aria-hidden="true" />
                </button>
                {props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={props.onIncrement}
                        onDecrement={props.onDecrement}
                        onDelete={props.onDelete}
                    />
                ))}
            </div>
        </ErrorBoundary>
    );
};
export default Counters;
