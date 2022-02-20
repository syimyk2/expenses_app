import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { Button } from '@mui/material';

const ExpenseItem = (props) => {
 
  const deleteExpenseItem =(event)=>{
   props.onDelete(event.target.id)
  }
  return ( 
    <Card className='expense-item'>
      <ExpenseDate date={props.date} /> 
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <Button onClick={deleteExpenseItem} id={props.id} style={{background: '#40005d' , color: 'white', borderColor: 'white'}} variant="outlined" >delete</Button>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
