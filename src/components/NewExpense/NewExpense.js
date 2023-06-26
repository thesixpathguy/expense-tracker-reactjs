import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const submitExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
    setShowForm(false);
  };

  const resetExpenseHandler = () => {
    setShowForm(false);
  };

  const buttonHandler = () => {
    setShowForm(true);
  };

  if (!showForm) {
    return (
      <div className="new-expense">
        <button onClick={buttonHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSubmitExpense={submitExpenseHandler}
        onResetExpense={resetExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
