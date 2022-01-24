import React from 'react';
import Chart from '../chart/Chart';

const ExpensesChart = (props) => {
  const ChartDataPoints = [ // бул биздин диаграммага керектуу болгон массив даннйлары менен
      {label: "Jan", value: 0},
      {label: "Feb", value: 0},
      {label: "Mar", value: 0},
      {label: "Apr", value: 0},
      {label: "May", value: 0},
      {label: "Jun", value: 0},
      {label: "Jul", value: 0},
      {label: "Aug", value: 0},
      {label: "Sep", value: 0},
      {label: "Oct", value: 0},
      {label: "Nov", value: 0},
      {label: "Dec", value: 0},
    ]
    for (const expense of props.expenses) { // форик менен  пропстан филтрация болуп келген массивти аралладык
        const expenseMonth = expense.date.getMonth() // прпстан келген массивтин датадан айдын санын алып алдык
        ChartDataPoints[expenseMonth].value+=expense.amount // жана ошол айдын саны менен  массивтин ииндеги обьекттердин валуесине  эмоуту кошула берсин дедик
        
    }
    return( 
        <Chart dataPoints = {ChartDataPoints}/>// чарт деген компонент ке биздин массивти пропс катары бердик чтобы аны керректуу жерден рендер кылуу учун

    )
};

export default ExpensesChart;
