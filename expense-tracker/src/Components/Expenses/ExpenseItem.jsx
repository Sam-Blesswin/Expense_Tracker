/**
 * Component in react is just a function which returns JSX
 * return statement must contain only one root element. so multiple tags are wrapped under a common tag.
 * props: data passed to the component
 *
 * Cannot directly use custom components as root tag. But in the custom component you can use {props.children} to
 * make this as a root component.
 *
 */
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    //root element is first <div>
    //class in html changed to className in react.
    //class is a reserved keyword in javascript, so className is used instead.

    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
