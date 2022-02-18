import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	// ар бир инпутка состояние си озгоргондо переоцненка кыл кайра карап чык деп койдук

	const titleChangeHandler = (event) => {
		setTitle(event.target.value)
	}

	const amountChangeHandler = (event) => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}
	const closeAddExpense =()=>{
		props.setClose(true)
  
	}

	// жогорудагы функциялар прослушканын функцияялары инпуттар менен взаимодействие болгондо иштейт жана интуттардын валуелерин алып беришет

	const submitHandler = (event) => { // формга прослушка койуп  баттон басылганда ушул функция иштейт
		event.preventDefault() // сабмиттин дефолтный поведениясын токтотуу учун жазыдык
    const expensesData = { //юстейтте озгоргон премнныйды  жаны обьект тузуп ага берип койдук
        title : title,
        amount : Number(amount), // эмоунтту намбер кылдык чтобы диграмма тузуп жатканда конкатинация болуп кетпеши учун
        date : new Date(date), // стринг болуп келген датаны кадимки датага айландырып алдык
    }
    // console.log(expensesData);
    props.onSaveExpensesData(expensesData) // жогоруда тузгон обьектти пропс менен келген функцияга аргумнт катары бердик (лифтинг ап)
	props.setClose(true)
	}
  
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						value={title}
						onChange={titleChangeHandler}
            size={10}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						name='amount'
						type='number'
						// min='0.1'
						step='1'
						value={amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date '
						type='date'
						min='2022-01-01'
						value={date}
						onChange={dateChangeHandler}
            
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
				<button onClick={closeAddExpense}>Cencel</button>
			</div>
		</form>
	)
}

export default ExpenseForm
