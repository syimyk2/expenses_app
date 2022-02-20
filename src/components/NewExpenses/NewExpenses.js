import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
const NewExpenses = (props) => {

  const SaveExpensesDataHandler = (enteredExpensesData) =>{ // экспенсформдан келген данныйларды ала турган функция 
      const expensesData = { // функциянын аргументинен данныйларды алып ага айди берип  жаны обьектке салыдык
        ...enteredExpensesData,
        id : Math.random().toString()
      }
      // console.log(expensesData);
      props.newData(expensesData) // и ошол обьекти дагы родит компонентке пропс аркылуу котордук
  }
  const changeAddExpense=()=>{
		props.setShowExpenses(false)

	}
  return (
    <div className="new-expense">
     {props.showAdd ? <div><button className= 'btn' onClick={changeAddExpense}> Add New Expenses</button></div> :<ExpenseForm setClose={props.setClose} onSaveExpensesData = {SaveExpensesDataHandler} />}
    </div>
  );
};

export default NewExpenses;
