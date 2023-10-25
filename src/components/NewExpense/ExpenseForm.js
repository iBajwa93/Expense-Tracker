import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
  //multiple states option, helps allow changes in each input tag for a different attribute; using different useState():
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //single state option:
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //multiple states option:
    //within event lies a target group, within that group lies a value tag attribute; and value refrences the user's input text which will replace the current title
    setEnteredTitle(event.target.value);

    // //single state option:
    // //The ...userInput helps make sure the values for Amount and Date are not lost when updating Title, it carries over all the old data.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // Better way of writing single state code (for more efficient attribute updates)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //multiple states option:
    setEnteredAmount(event.target.value);

    // //single state option:
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    //multiple states option:
    setEnteredDate(event.target.value);

    // //single state option:
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    //.preventDefault() prevents a request being sent when an event occurs, which means the page won't automatically reload (which is a default behavior)
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //the expenseData's data will be transferred to any file that ExpenseForm componenet is called in, (such as NewExpense.js)
    props.onSaveExpenseData(expenseData);
    //Once the submit button is clicked, all input fields (title, amount and date) will be replaced by the values below, thus being cleared of previous inputs
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          {/* onChange is an event listener and a title change event will occur within it, this event will replace the current title with a new user input value */}
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
