import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    let expensesContent = <h2>NO Expenses found</h2>// озгормону  н2 тегке барабарлап койдук

  if (props.filteredYear ==="all") ( // если пропстан келген филтередеар олл го барабар болсо 
      
     expensesContent =  props.total.map((element) => { // жогоорудагы пременныйга пропстан келген массивти аралап експенссайтемге  керектуу пропстарын бергенин барабарлап койдук
          return ( // бул условия бизге баардык карточкалады чыгарып берет
            <ExpenseItem
              key={Math.random()}
              title={element.title}
              amount={element.amount}
              date={element.date}
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
          />
        );
      }) 
  }
  return( // жана жогорудагы переменныйды юл тегке берип койдук 
    //ал бизге условиларыбызга туура келген уурда озгоруп турат. жана бул компоненти експенсестен чакырып койдук
      <ul className='expenses-list'>
          { expensesContent }

      </ul>
  )
};

export default ExpensesList;
