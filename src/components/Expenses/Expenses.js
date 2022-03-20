import React, { useState } from 'react'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');
  
  const filterChangeHandler = (sellectedYear) => {
    setFilteredYear(sellectedYear);
  }

  const filteredExpenses = props.item.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;
