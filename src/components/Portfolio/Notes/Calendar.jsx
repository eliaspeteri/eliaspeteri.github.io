import React, { Component, useEffect, useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import "./css/calendar.css";
import {
  getDay,
  format,
  addMonths,
  subMonths,
  addYears,
  subYears,
} from "date-fns";
import Dates from "./Dates";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      viewDate: new Date(),
    };
  }

  handleClick(move) {
    const { viewDate } = this.state;
    if (move === "next") {
      if (format(viewDate, "MM") === "12") {
        this.setState({ viewDate: addYears(viewDate, 1) });
      }
      this.setState({
        viewDate: addMonths(viewDate, 1),
      });
    } else if (move === "previous") {
      if (format(viewDate, "MM") === "01") {
        this.setState({ viewDate: subYears(viewDate, 1) });
      }
      this.setState({
        viewDate: subMonths(viewDate, 1),
      });
    } else if (move === "today") {
      const { today } = this.state;
      this.setState({ viewDate: today });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  parseWeekday(date) {
    switch (getDay(date)) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Unknown weekday";
    }
  }

  render() {
    const { today, viewDate } = this.state;

    return (
      <div id="calendar-container">
        <header>
          <div id="clock">
            {this.parseWeekday(today)}
            &nbsp;
            <b>
              <Clock />
            </b>
          </div>
        </header>
        <header>
          <button
            id="previous-month"
            type="button"
            onClick={() => {
              this.handleClick("previous");
            }}
          >
            <IoArrowBackOutline size={20} color="#646464" />
          </button>
          <b id="month">
            <button
              id="today-month"
              type="button"
              onClick={() => this.handleClick("today")}
            >
              {`${format(viewDate, "MMMM")} ${format(viewDate, "yyyy")}`}
            </button>
          </b>
          <button
            id="next-month"
            type="button"
            onClick={() => {
              this.handleClick("next");
            }}
          >
            <IoArrowForwardOutline size={20} color="#646464" />
          </button>
        </header>
        <Dates date={viewDate} />
        <span>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <em>Built with date-fns and React </em>⚛
        </span>
      </div>
    );
  }
}

export default Calendar;

const Clock = () => {
  const [time, setTime] = useState(format(new Date(), "p"));
  useEffect(() => {
    setInterval(() => setTime(format(new Date(), "p"), 60000));
  }, []);
  return time;
};
