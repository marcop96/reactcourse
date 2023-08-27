/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // function titleChangeHandler() {
  //   setEnteredTitle(event.target.value);
  // }

  // function amountChangeHandler() {
  //   setEnteredAmount(event.target.value);
  // }

  // function dateChangeHandler() {
  //   setEnteredDate(event.target.value);
  // }

  function inputChangeHandler(identifier, value) {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    }
  }
  function submitHandler(event) {
    event.preventDefault();

    if (enteredTitle === "" || enteredAmount === "" || enteredDate === "") {
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(event);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    swapHidden();
    let newExpenseDate = document.getElementById("date").value;
    props.setFilteredYear(newExpenseDate.split("-")[0]);
  }
  const [isHidden, setIsHidden] = useState(true);
  function swapHidden() {
    setIsHidden(!isHidden);
  }

  if (isHidden === true) {
    return <button onClick={swapHidden}>Create new Expense</button>;
  }
  if (isHidden === false) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={(event) =>
                inputChangeHandler("title", event.target.value)
              }
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={(event) =>
                inputChangeHandler("amount", event.target.value)
              }
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              id="date"
              type="date"
              value={enteredDate}
              min="2019-01-01"
              onChange={(event) =>
                inputChangeHandler("date", event.target.value)
              }
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button
            onClick={() => {
              swapHidden();
              setEnteredTitle("");
              setEnteredAmount("");
              setEnteredDate("");
            }}
          >
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
