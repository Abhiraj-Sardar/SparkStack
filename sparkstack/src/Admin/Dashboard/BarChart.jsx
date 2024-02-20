import React from 'react'
import { Line } from "react-chartjs-2";
import "./BarChart.css"
const BarChart = ({ chartData }) => {
    return (
        <>
        <h3 className='text-center'>User Activity</h3>
    <div className="chart-container user-graph">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2000-2012",
              color:"#fff",
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
    </>
            )
}

            export default BarChart
