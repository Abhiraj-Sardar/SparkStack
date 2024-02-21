import React,{useState} from 'react'
import AdminSidebar from './AdminSidebar'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { AIDataUtil } from "../utils/AIDataUtil";
import BoxChart from './BoxChart';

Chart.register(CategoryScale);

const Mobile = () => {
  const [mobileData, setMobileData] = useState({
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
                <AdminSidebar/>
            </div>
            <div className="col-10 dashboard-content">
                <h1 className='text-center'>Mobile Sales Review</h1>
                <BoxChart chartData={mobileData}/>
            </div>
        </div>
  )
}

export default Mobile
