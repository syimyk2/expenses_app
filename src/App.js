import React, { useState } from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const INIT_DATA = [ // биз озубуз тузгон данныйлар обычно они приходит нам с бекнда через фетч
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2022, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2023, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2024, 5, 12),
	},
]

const App = () => { 
	const [expenses, setExpenses] = useState(INIT_DATA) //  ню экспенстен келген данныйлар массивке салынып 
	//кайра рендер кылганы  експенсеске пропс катары берилди

	const NewExpensesData = (newData) => { // лифтинг ап менен келгенданныйларды алдып
		setExpenses((prevExpenses) =>{ // предыдущий жана жаны элементтерди юстейт озгорто турган переменныйга  салып койдук 
      return [...prevExpenses,newData]
    })
	}

	return (
		<div>
			<NewExpenses newData={NewExpensesData} />
			<Expenses 
			items={expenses}// биздин юстейт менен озгоруп турган массивти пропс катары бердик
			 />
		</div>
	)
}

export default App
