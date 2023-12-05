import React from "react";


function CalendarDays(props) {




  let firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    // determining days...

    currentDays.push({
      // Push the day object into the array instead of returning JSX here
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    });

    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }
  }//////

  return (
    <div className="table-content">
      {currentDays.map((day, index) => (
        <div
          key={index} // Add a unique key for each mapped item
          className={
            "calendar-day" +
            (day.currentMonth ? " current" : "") +
            (day.selected ? " selected" : "")
          }
          onClick={() => props.changeCurrentDay(day)}
        >
          <p>{day.number}</p>
        </div>
      ))}
    </div>
  );
}

export default CalendarDays;