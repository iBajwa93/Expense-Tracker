import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//'className' is conventional use for JSX coding (Javascript uses 'class') and will allow us to call css code to style our component's code
//props is the parameter that holds all of the  key-value pair attributes in the ExpenseItem component,
// this data parameter will then be exported for use in other .js files
const ExpenseItem = (props) => {
  //props.attributeName is added in to the custom component tags so that it can display the data dynamically, data that's recieved from app.js
  return (
    <li>
      <Card className="expense-item">
        {/* Pass the date attribute from ExpenseItem (which is recieved from App.js) into ExpenseDate, 
      it is then organized and displayed using ExpenseDate's component setup. */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
