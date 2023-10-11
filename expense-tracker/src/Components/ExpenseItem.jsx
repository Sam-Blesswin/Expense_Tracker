/*
*
Component in react is just a function which returns JSX
return statement must contain only one root element. so multiple tags are wrapped under a common tag.
props: data passed to the component
*
*/

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  const expenseDate = props.date;

  return (
    //root element is first <div>
    //class in html changed to className in react.
    //class is a reserved keyword in javascript, so className is used instead.

    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
