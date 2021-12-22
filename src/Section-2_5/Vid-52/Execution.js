import React from "react";
import {useState, useEffect } from "react";
import Card from "../UI/Card";
import axios from "axios";
import NewExpense from "../Vid-52/NewExpense";
import Expenses from "../Vid-36/Expenses";
import "./Execution.css"

const DUMMY_EXPENSES = [
  
];

const App = () => {
   //const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const [expenses, setExpenses] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
const [newTitle, setNewTitle] = useState("");
const [newAmount, setNewAmount] = useState("");
  useEffect(() => {


    axios
      .get("https://resumeexpensetracker.herokuapp.com/read/")
      .then((response) => {
        console.log(response);
        setExpenseList(response.data);
        setExpenses(response.data);
      });
  }, []);

  const updateExpense = (id) => {

    axios.put("https://resumeexpensetracker.herokuapp.com/update/", {
      id: id,
      newTitle: newTitle,
      newAmount: newAmount,
    });
    window.location.reload(true);
  };

  const deleteExpense = (id) => {
    axios.delete(`https://resumeexpensetracker.herokuapp.com/delete/${id}`);

    window.location.reload(true);
  };


  
  const addExpenseHandler = (expense) => {
    setExpenses((expenseList) => {
      return [expense, ...expenseList];
    }); 
    window.location.reload(true);  
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

      <li className="mern-contents-expense-tracker">
        <h1 className="expense-item__heading">Mongo DB Contents</h1>

        {expenseList.map((val, key) => {
          return (
            <div>
              <div
                style={{ display: "flex", padding: "1%", marginLeft: "19.5%" }}
              >
                <div class="expense-date-mern">{val.date}</div>
                <div className="expense-item__description">
                  <h2 style={{ position: "absolute", marginLeft: "5%" }}>
                    {val.title}
                  </h2>

                  <div
                    className="expense-item__price"
                    style={{ position: "absolute", marginLeft: "23%" }}
                  >
                    ${val.amount}
                  </div>

                  <button
                    onClick={() => deleteExpense(val._id)}
                    className="expense-item__delete"
                    style={{ position: "absolute", marginLeft: "35%" }}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <label style={{ fontWeight: "bold" }}>UPDATED TITLE : </label>
              <input
                onChange={(event) => {
                  setNewTitle(event.target.value);
                  console.log(event.target.value);
                }}
                type="text"
                placeholder="Please Enter Title"
                className="input-text-expense"
              />
              {/* <input
                onChange={(event) => {
                  setNewAmount(event.target.value);
                  console.log(event.target.value);
                }}
                type="number"
                min="0.01"
                placeholder="Please Enter Amount"
                className="input-text-expense"
              /> */}

              <button
                className="expense-item__update"
                onClick={() => updateExpense(val._id)}
              >
                Update
              </button>
              <br />
              <br />
              <hr style={{width:"80%",height:"0.75px",backgroundColor:"white"}}/>

              <br />
            </div>
          );
        })}
      </li>
    </div>
  );
};

export default App;
