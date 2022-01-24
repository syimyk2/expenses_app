 import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesList.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('all') // селекттеги биз тфандаган жыл келет поумолчанию all
  const filterChangeHandler = (selectedYear) =>{ // бул функция менен селектег жылды пропс аркылуу алып алдык(лифтинг ап)
    setFilteredYear(selectedYear) // анан юстейт менен озгорто турган кылып койдук анан  аны  ExpenseFilterге пропс катары бердик
  }
  const filteredExpenses = props.items.filter((el)=>{ //  бизге келген данныйларды жылга карата алган фильтрация 
    return el.date.getFullYear().toString() === filteredYear// филтрациянын условияясы жылды алып аны стринг кылдык чтобы салыштырыш учун
  })
  return (
    <Card className="expenses"> 
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
      <ExpensesChart expenses ={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} filteredYear={filteredYear} total={props.items}/> 

    </Card>
  );
};

export default Expenses;
