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
class Dates extends Component {
    state = {
        today: new Date(),
        events: [],
        selectedDate: null,
        writingNote: false,
    };

    render() {
        console.log("rendered Dates");

        const weekdays = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];
        let startDate = set(new Date(), {
            year: getYear(this.props.date),
            month: getMonth(this.props.date),
            date: getDate(
                nextDay(sub(startOfMonth(this.props.date), { days: 7 }), 1)
            ),
        });

        return (
            <div id="dates-container">
                {[...Array(7)].map((x, day) => (
                    <div key={day} className="weekdays">
                        <div className="day-names">
                            <b>{weekdays[day]}</b>
                        </div>
                        {[...Array(5)].map((x, week) => (
                            <div
                                key={week + day}
                                // If the currently printed date matches today's date, use the date-today class
                                className={
                                    format(
                                        add(startDate, {
                                            days: 7 * week + day,
                                        }),
                                        "dd"
                                    ) === format(this.state.today, "dd") &&
                                    format(this.state.today, "yyyyMM") ===
                                        format(startDate, "yyyyMM")
                                        ? "date-today"
                                        : // Else if the selected month does not match this month, use the date-different-month class
                                        format(
                                              add(startDate, {
                                                  days: 7 * week + day,
                                              }),
                                              "yyyyMM"
                                          ) !==
                                          format(this.state.today, "yyyyMM")
                                        ? "date-different-month"
                                        : // Else use the date class
                                          "date"
                                }
                            >
                                {format(
                                    add(startDate, {
                                        days: 7 * week + day,
                                    }),
                                    "d"
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
