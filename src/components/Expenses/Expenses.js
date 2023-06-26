import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filterValue, setFilterValue] = useState("2020");
  const filterChangeHandler = (changedFilter) => {
    setFilterValue(changedFilter);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selected={filterValue}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
