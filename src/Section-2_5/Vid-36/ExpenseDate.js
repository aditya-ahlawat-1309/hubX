import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //const year = props.date.getFullYear();


const day = props.date.toString().substring(8,10);
const month = props.date.toString().substring(5, 7);


    const date_string = props.date.toString();
    const date_string_slice = date_string.substring(0, 4);
    const year = date_string_slice;

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
