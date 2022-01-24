import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return ( // бул компонент бизге чыгып жаткан затраттар бул жерде биз экспенсс дейтти чакырдык и пропс менен келген керектуу date title amounttar berildi
    <Card className='expense-item'>
      <ExpenseDate date={props.date} /> 
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
