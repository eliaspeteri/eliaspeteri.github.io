import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  getBadgeClasses() {
    const { counter } = this.props;
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { counter } = this.props;
    return counter === 0 ? "Zero" : counter;
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onIncrement(counter)}
            >
              Increment
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="btn btn-info m-2"
              onClick={() => onDecrement(counter)}
              disabled={counter.value === 0 ? "disabled" : ""}
            >
              Decrement
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete(counter.id)}
            >
              Remove
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Counter;

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
