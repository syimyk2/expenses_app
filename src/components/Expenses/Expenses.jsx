 import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesList.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2022') 
  const filterChangeHandler = (selectedYear) =>{ 
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((el)=>{ 
    return el.date.getFullYear().toString() === filteredYear 
  })

  
  return (
    <Card className="expenses"> 
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
      <ExpensesChart expenses ={filteredYear==='all'? props.items: filteredExpenses } />
      <ExpensesList getExpenses={props.getExpenses} expenses={filteredExpenses} filteredYear={filteredYear} total={props.items}/> 

    </Card>
  );
};

export default Expenses;
