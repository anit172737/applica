import React from 'react'
import { Line } from 'react-chartjs-2'
import '../sass/chart.scss'

function Chart(props) {
  return (
    <div className="chart">
    <div className='chart__sec'>
      <Line 
        data={{
          labels: [
            'jan',
            'feb',
            'mar',
            'apr',
            'may',
            'jun'
          ],
          datasets: [
            {
              label:'Employee Tasks Chart',
              data: [94, 45, 60, 19, 62, 72],
              //backgroundColor:'green',
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
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
    </div>
  )
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: 'bottom'
}

export default Chart
