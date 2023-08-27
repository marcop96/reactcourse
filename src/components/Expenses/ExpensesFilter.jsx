/* eslint-disable react/prop-types */
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const { years } = props;
  function selectedYearHandler(event) {
    props.onChangedFilter(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectedYearHandler}>
          {years.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
