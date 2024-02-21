import React,{useState} from 'react'
import AdminSidebar from './AdminSidebar'
import BoxChart from './BoxChart';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DataUtil } from "../utils/DataUtil";

Chart.register(CategoryScale);

const Web = () => {
    const [webData, setWebData] = useState({
        labels: DataUtil.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: DataUtil.map((data) => data.userGain),
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
            ] ,
            borderColor: "#fff",
            borderWidth: 1,
            fill:false,
            tension:0
          }
        ]
      });
    return (
        <div className="row">
            <div className="col-2">
                <AdminSidebar/>
            </div>
            <div className="col-10 dashboard-content">
                <h1 className='text-center'>Web Dev Market Analysis</h1>
                <BoxChart chartData={webData}/>
            </div>
        </div>
    )
}

export default Web
