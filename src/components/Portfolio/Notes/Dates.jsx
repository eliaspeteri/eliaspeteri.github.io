import React, { Component } from "react";
import "./dates.css";
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
                            <div key={week + day}>
                                {format(
                                    add(startDate, {
                                        days: 7 * week + day,
                                    }),
                                    "dd"
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
