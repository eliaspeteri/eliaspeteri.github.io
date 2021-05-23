/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { Component } from "react";
import "./css/dates.css";
import {
  format,
  add,
  sub,
  set,
  getYear,
  getMonth,
  getDate,
  startOfMonth,
} from "date-fns";
import nextDay from "date-fns/nextDay";
import PropTypes from "prop-types";

class Dates extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      //   events: [],
      //   selectedDate: null,
      //   writingNote: false,
    };
  }

  render() {
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const { date } = this.props;
    const { today } = this.state;
    const startDate = set(new Date(), {
      year: getYear(date),
      month: getMonth(date),
      date: getDate(nextDay(sub(startOfMonth(date), { days: 7 }), 1)),
    });

    return (
      <div id="dates-container">
        {[...Array(7)].map((_x, day) => (
          <div key={day} className="weekdays">
            <div className="day-names">
              <b>{weekdays[day]}</b>
            </div>
            {[...Array(6)].map((_y, week) => (
              <div
                key={week + day}
                // If the currently printed date matches today's date, use the date-today class
                className={
                  format(
                    add(startDate, {
                      days: 7 * week + day,
                    }),
                    "dd",
                  ) === format(today, "dd") &&
                  format(today, "yyyyMM") === format(startDate, "yyyyMM")
                    ? "date-today"
                    : // Else if the selected month does not match this month, use the date-different-month class
                    format(
                        add(startDate, {
                          days: 7 * week + day,
                        }),
                        "yyyyMM",
                      ) !== format(today, "yyyyMM")
                    ? "date-different-month"
                    : // Else use the date class
                      "date"
                }
              >
                {format(
                  add(startDate, {
                    days: 7 * week + day,
                  }),
                  "d",
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
export default Dates;

Dates.propTypes = {
  date: PropTypes.string.isRequired,
};
