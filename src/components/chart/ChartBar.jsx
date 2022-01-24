import React from 'react';
import './ChartBar.css' //керектуу стилдери коштук

const ChartBar = (props) => {
  let barFillheight = '0%' //бир переменный ачып аны 0% деген стрингге бп=арабарлап койдук
  if (props.maxValue>0) { // егерде пропстан келген  мах валуе 0 дон чон боолсо 
    barFillheight=Math.round((props.value/props.maxValue)*100) + '%' // жогорудагы переменнйга прцентке откоруп тегеректеп кой дедик
    
  }
  return <div className='chart-bar'>
    <div className='chart-bar__inner'>
      <div className="chart-bar__fill"
       style={{height: barFillheight}} // бизге диаграманы корсотуп бере турган столбиктин бийиктигине жогорудагы barFillheight ти берип койдук 
       > 

      </div>

    </div>
    <div className='chart-bar__label'>
      {props.label } 
    </div>

  </div>; // пропс лейбл болсо столбиктин ылдый жагында  айлар корунуп турушу учун
};

export default ChartBar;
