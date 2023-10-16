import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]); //use prev state to update expense which we get automatically from react
  };

  return (
    <div>
      <div>
        <NewExpense onAddExpense={AddExpenseHandler} />
      </div>
      <div>
        <Expenses items={expenses} />
      </div>
    </div>
  );
};

export default App;
