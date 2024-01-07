// Calendar.jsx

import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

const CustomCalendar = ({ selectedDate, onDateChange }) => {
  return (
    <div className="calendar-container">
      <h2>Event Calendar</h2>
      <Calendar onChange={onDateChange} value={selectedDate} />
    </div>
  );
};

export default CustomCalendar;
