/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import ErrorBoundary from "../../ErrorBoundary";

const Counters = (props) => {
  const { onReset, onIncrement, onDelete, onDecrement, counters, onRestart } =
    props;
  return (
    <ErrorBoundary>
      <div>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0 ? "disabled" : ""}
        >
          Zero
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={onRestart}
          disabled={counters.length !== 0 ? "disabled" : ""}
        >
          Restart
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
};
export default Counters;

Counters.propTypes = {
  counters: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};
