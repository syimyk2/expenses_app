import React, { Fragment, useState } from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
import { BASE_URL } from '../../utils/constants';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ExpensesList = (props) => {
  const [alertDel, setAlertDel]= useState(null)
    const deleteExpenseItem = async(id)=>{
       const response = await fetch(`${BASE_URL}/expenses/${id}.json`,{
         method: 'DELETE',
         headers: {
          'Content-Type': 'application/json',
        },
       })
       const data = await response.json()
       console.log(data);
     
    
     setAlertDel(true)
     setTimeout(() => {
       setAlertDel(null)
     }, 4000);
     setTimeout(() => {
        props.getExpenses()
     }, 3000);
    
     
    }
 let expensesContent = <h2>NO Expenses found</h2>
 

  if (props.filteredYear === "all") ( // если пропстан келген филтередеар олл го барабар болсо 
      
     expensesContent =  props.total.map((element) => { // жогоорудагы пременныйга пропстан келген массивти аралап експенссайтемге  керектуу пропстарын бергенин барабарлап койдук
          return ( // бул условия бизге баардык карточкалады чыгарып берет
            <ExpenseItem
              key={Math.random()}
              title={element.title}
              amount={element.amount}
              date={element.date}
              id ={element.id}
              onDelete={deleteExpenseItem}
            />
          );
        })
      
  )
  if (props.expenses.length>0) { //если длина филтрованного массива который мы получаем через пропс будет больше 0
    expensesContent = props.expenses.map((element) => { //  то выше обявленную переменую м приссваиваем ниже написанную операцию мар
        return (
          <ExpenseItem
            key={Math.random()} // уникалный ключ катары рандомный сан берип койдук реакт туура иштеши учун
            title={element.title} // элементтин тайтлын бердик
            amount={element.amount} // эмонтун
            date={element.date} // датасын
            id ={element.id}
            onDelete={deleteExpenseItem}
          />
        );
      }) 
  }
  return( // жана жогорудагы переменныйды юл тегке берип койдук 
    //ал бизге условиларыбызга туура келген уурда озгоруп турат. жана бул компоненти експенсестен чакырып койдук
    <Fragment> 
    {alertDel && <Alert  severity="warning">
    This expense deleted !
  </Alert>}
      <ul className='expenses-list'>
          { expensesContent }

      </ul>
    </Fragment>
   
  )
};

export default ExpensesList;
