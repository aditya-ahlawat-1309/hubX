import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },

    // { label: "01", value: 0 },
    // { label: "02", value: 0 },
    // { label: "03", value: 0 },
    // { label: "04", value: 0 },
    // { label: "05", value: 0 },
    // { label: "06", value: 0 },
    // { label: "07", value: 0 },
    // { label: "08", value: 0 },
    // { label: "09", value: 0 },
    // { label: "10", value: 0 },
    // { label: "11", value: 0 },
    // { label: "12", value: 0 },
  ];

  for (const expense of props.expenses) {
    const date_string = expense.date.toString();
    let date_string_slice = date_string.substring(6, 7);
   // {date_string_slice = date_string_slice != "0" ?  date_string.substring(5, 7) : date_string.substring(6, 7)}
    
     //const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0

     const expenseMonth = date_string_slice; // starting at 0 => January => 0
   //const expenseMonth = expense.date.toString().replace('-','/');
  //   var months = [];
  //  months.push(moment().month(expenseMonth).format("MMM"));
  //  console.log(months); 
   
     chartDataPoints[expenseMonth].value += expense.amount;
    // chartDataPoints[months[expenseMonth]].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
