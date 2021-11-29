
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import '../sass/chart.scss';
import UpdateChart from './updateChart';

function Chart(props) {
  const [openModal, setopenModal] =useState(false)
  const [chart, setChart] = useState([]);
  // const [demo, setDemo] = useState([])
  // let month = [];
  const handleToggle =()=>{
    setopenModal(!openModal)
  }

  const handleGet = async () =>{
    const {data} = await axios.get(`http://localhost:5000/api/chartjs`)
    setChart(data);
    
    // setDemo(chart.map(e => e.month));
}
let month = chart.map(e => e.month);
let totalTask = chart.map(e => e.totalTask);

console.log(month);
// console.log(demo);

useEffect(()=>{
    handleGet()
   console.log(chart);
  },[openModal])
  
  return (
    <div className="chart">
    <div className='chart__sec'>
      <Line 
        data={{
          labels: month,
          datasets: [
            {
              label:'User Tasks Chart',
              data: totalTask,
              //backgroundColor:'green',
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 99, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }}
        options={{
          title: {
            display: true,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: '#000'
            }
          }
        }}
      />
      </div>
      <input type='button' onClick={handleToggle} value='Update Chart' className='chart__btn'/>
      {openModal ? <UpdateChart onToggle={handleToggle} /> : ''}
    </div>
  )
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: 'bottom'
}

export default Chart
