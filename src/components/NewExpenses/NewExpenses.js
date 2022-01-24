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
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensesData = {SaveExpensesDataHandler} />
    </div>
  );
};

export default NewExpenses;
