/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const { setYears, setFilteredYear } = props;

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
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    let newExpenseDate = document.getElementById("date").value;
    const newYear = newExpenseDate.split("-")[0];
    const newYearList = [];

    newYearList.push(newYear);
    setFilteredYear(newYear);

    setYears((prevState) => {
      console.log(prevState);

      console.log(newYear);
      const yearArray = [...new Set([...prevState, Number(newYear)])];

      return yearArray.sort().reverse();
    });
  }

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
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          onClick={() => {
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

export default ExpenseForm;
