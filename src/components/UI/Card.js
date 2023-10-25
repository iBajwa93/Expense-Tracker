import React from "react";
import "./Card.css";

//<Card> is be a wrapper component, where its CSS class will be used in multiple functions alongside their css classes.
const Card = (props) => {
  //props.className represents any other functions classes that are used alongside the card class in the <Card> component
  const classes = "card " + props.className;
  //This component will now return a <div> that supports classes and other components within it, while still remaining a custom componenet of our making
  //props.children relates to all of the content placed within this custom component (such as the content within <Card></Card> inside ExpenseItem.js)
  return <div className={classes}>{props.children}</div>;
};

export default Card;
