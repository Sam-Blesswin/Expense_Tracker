import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //multiple states
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  //event is a default parameter reeceived from browser automatically when a event is subscribbed
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //single state
  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    //setUserInput({ ...userInput, enteredTitle: event.target.value }); //mostly works, but not always
    //wehenever your state update is depend on the prev update use this style to update state.
    SetUserInput((prevState) => {
      //react maintains a prev state, to make a correct update to the state
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
*/
  const submitHandler = (event) => {
    //whenever a form is submitted, the browser reloads the page by default.
    event.preventDefault(); //here it stops browser from reloading the page

    //save data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //pass data to parent component (Bottom Up)
    props.onSaveExpenseData(expenseData);

    //to clear the form after submit
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    //form tag itself handles submit event when there is a button of type submit inside its tag
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // that sets the value of the input element, controlled input in React, input value is controlled by the component's state
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
            min="2022-01-01"
            max="2050-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
