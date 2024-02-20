import React from 'react'
import { Line } from "react-chartjs-2";
import "./BarChart.css"
const BarChart = ({ chartData }) => {
    return (
        <>
        <h3 className='text-center'>User Activity</h3>
    <div className="chart-container user-graph">
      <Line style={{marginLeft:"2rem"}}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
    </>
            )
}

            export default BarChart
