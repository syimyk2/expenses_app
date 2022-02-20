import React, { useEffect, useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import BasicAlerts from './components/UI/Alert'
import Loading from './components/UI/Loading'
import { BASE_URL } from './utils/constants'



const App = () => { 
	const [expenses, setExpenses] = useState([]) 
	const [showExpense, setShowExpenses]=useState(true)
	const [loading, setLoading]= useState(null)
	const [error, setError]=useState(null)
	const [alert, setAlert]=useState(null)

	useEffect(()=>{
		getExpenses()
		
	}, [])
	 async function getExpenses(){
		 setLoading(true)
		 try {
			 const response = await fetch(`${BASE_URL}/expenses.json`)
			 if(!response.ok){
				 throw new Error('Eror something went wrong with fetch')
			 }
		const data = await response.json()
		console.log(data);
		const transformedData = []
		for (const key in data) {
			transformedData.push({
				id: key,
				title: data[key].title,
				amount: data[key].amount,
				date:  new Date (data[key].date)
			})
			
		}
		setExpenses(transformedData ? [...transformedData] : [])
		

		 } catch (error) {
			 setError(error.message)
			 
			 
		 }
		 setAlert(true)
		 setTimeout(() => {
			 setAlert(null)
		 }, 2000);
		setLoading(false)
     
	}
	async function postExpenses(newData) {
	     setLoading(true)

		 try {
			 const response = await fetch(`${BASE_URL}/expenses.json`,{
			method: 'POST',
			body: JSON.stringify(newData),
			headers: {
				'Content-Type': 'aplication/json',
			},
		})
		if(!response.ok){
			throw new Error('Something went wrong with post request')
		}
		const data = await response.json()
		console.log(data);
		setLoading(false)
		setAlert(true)
        setTimeout(()=>{
			setAlert(null)
		},2000)
	
		 } catch (error) {
			 setError(error.message)
			 
		 }
	}

	const NewExpensesData = (newData) => { 
		setExpenses((prevExpenses) =>{ 
      return [...prevExpenses,newData]
    })
	
	postExpenses(newData)
	}
     
	
	return (
		<div className='wrapper'>
			{alert && <BasicAlerts message={error}/>}
			{ loading ? <Loading/> : <><NewExpenses 
			showAdd={showExpense}
			 setShowExpenses={setShowExpenses} 
			 newData={NewExpensesData}
			  setClose={setShowExpenses}
			   /> 
			<Expenses
			 items={expenses}
			 getExpenses={getExpenses}
			  />
			   </>}
			
		</div>
	)
}

export default App
