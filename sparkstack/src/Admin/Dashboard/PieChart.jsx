import React from 'react'
import { Pie } from "react-chartjs-2";
import "./PieChart.css"
const PieChart = ({ aichartData }) => {
  return (
    <>
    <div className="chart-container user-pie">
      
      <Pie
        data={aichartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "AI Popularity between 2000-2020",
              color:"#fff"
            },
            legend:{
                display:false
            }
          }
        }}
      />
      
    </div>
    </>
  )
}

export default PieChart
