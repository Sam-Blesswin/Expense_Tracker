/**
 * Component in react is just a function which returns JSX
 * return statement must contain only one root element. so multiple tags are wrapped under a common tag.
 * props: data passed to the component
 *
 * Cannot directly use custom components as root tag. But in the custom component you can use {props.children} to
 * make this as a root component.
 *
 * on[EventName] is a javascript event handler (eg. onClick)
 *
 * Function Reference without Parentheses.
 * In an event handler like onClick={update}, you are passing a reference to the function itself. This means that the function
 * will not be executed immediately when the event occurs; it will only be executed when the event is triggered.
 *
 * Function Call with Parentheses
 * In an event handler like onClick={update()}, you are immediately executing the function and binding its return value to the
 * event handler.
 *
 * useState hook is used to maintain state in functional components.
 */

import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //always return an array of size 2. first element is the state, second element is a function to update the state (setState).
  //setState updates the state and triggers a re-render.

  const [title, setTitle] = useState(props.title); //only initialized first time 
  const clickHandler = () => {
    setTitle('updated!');
  };
  return (
    //root element is first <div>
    //class in html changed to className in react.
    //class is a reserved keyword in javascript, so className is used instead.

    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
