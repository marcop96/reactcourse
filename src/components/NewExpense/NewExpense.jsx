/* eslint-disable react/prop-types */
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const { setFilteredYear, setYears } = props;

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        setFilteredYear={setFilteredYear}
        setYears={setYears}
      />
      {/* passes onSaveExpenseData as a prop, which recieves saveexpensedatahandler as value */}
    </div>
  );
}

export default NewExpense;
