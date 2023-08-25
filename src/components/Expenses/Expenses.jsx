/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === "all"
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangedFilter={filterChangedHandler}
        />
      </Card>

      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
