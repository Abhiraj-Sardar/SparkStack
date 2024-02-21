import React,{useState} from 'react'
import AdminSidebar from './AdminSidebar'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { AIDataUtil } from "../utils/AIDataUtil";
import BarChart from './BarChart';
Chart.register(CategoryScale);
const TechJobs = () => {
    const [techJobData, setTechJobData] =useState({
        labels: AIDataUtil.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: AIDataUtil.map((data) => data.popularity),
            backgroundColor: [
              "#FFBE98",
              "#1D24CA",
              "#F72798",
              "#FF8911",
              "#40A2E3",
              "#D04848",
              "#910A67",
              "#A94438",
              "#DC84F3",
              "#525CEB",
              "#FF9800"
            ],
            borderColor: "#fff",
            borderWidth: 1
          }
        ]
      });
    return (
        <div className="row">
            <div className="col-2">
                <AdminSidebar />
            </div>
            <div className="col-10 dashboard-content">
                <h1 className='text-center'>Job Market Analysis</h1>
                <BarChart chartData={techJobData}/>
            </div>
        </div>
    )
}

export default TechJobs
