import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {

const dataPointValues = props.dataPoints.map((data)=> data.value) // пропстан келеген массивти аралап датанын валуелерин бир массивке салып койдук
const totalMax = Math.max(...dataPointValues)//  и датанын валуеери жаткан массивтен максимальныйын алып алдык


  return(//компонент динамический болду
       <div className='chart'> 
      {
          props.dataPoints.map((dataPoint)=> ( //пропстан келген массивти аралап ииндеги обьекттердин свойстваларын бердик
              <ChartBar
              key ={dataPoint.label} // кейге лейбл берип койдук анткени л уникалный(бул реакт туура перебирайтетиши учун кк)
              value = {dataPoint.value} // валусин озунчо бердик
              maxValue ={totalMax} // мах санды дагы пропс катары бердик
              label={dataPoint.label}/>
          ))
      }
  </div>);
};

export default Chart;
