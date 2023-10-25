import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Hard Drive",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //expenses variable is an object array

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //a new expense object will be added and the previous items in the expenses array will be listed afterward, thus updating the array
      return [expense, ...prevExpenses];
    });
  };

  // //old way of writing React custom elements:
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* items will pass the entire expenses array data for usage in Expenses.js. Make sure both variable names are similar for what's being exported and imported,
      in this case 'items' should be used as the same name in both App.js (for exporting) and Expenses.js (for importing) */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
