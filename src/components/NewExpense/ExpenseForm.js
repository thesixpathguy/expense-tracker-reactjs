import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputChangeHandler = (identifier, value) => {
    switch (identifier) {
      case "title":
        setUserInput((prevState) => {
          return {
            ...prevState,
            title: value,
          };
        });
        break;
      case "amount":
        setUserInput((prevState) => {
          return {
            ...prevState,
            amount: value,
          };
        });
        break;
      case "date":
        setUserInput((prevState) => {
          return {
            ...prevState,
            date: value,
          };
        });
        break;
      default:
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const stringDate = userInput.date;
    props.onSubmitExpense({ ...userInput, date: new Date(stringDate) });
    props.onResetExpense();
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  const resetHandler = (event) => {
    event.preventDefault();
    props.onResetExpense();
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
