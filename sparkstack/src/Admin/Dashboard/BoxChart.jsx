import React from 'react'
import { Bar } from "react-chartjs-2"
const BoxChart = ({ chartData }) => {
  return (
    <div className="chart-container user-graph">
    <Bar
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
  )
}

export default BoxChart
