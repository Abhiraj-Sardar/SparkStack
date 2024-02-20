import React,{useState} from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import AdminCard from './AdminCard'
import BarChart from './BarChart'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DataUtil } from "../utils/DataUtil";

Chart.register(CategoryScale);

const AdminHome = () => {
    const [chartData, setChartData] = useState({
        labels: DataUtil.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: DataUtil.map((data) => data.userGain),
            backgroundColor: "rgba(75,192,192,1)" ,
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
                <AdminSidebar />
            </div>

            <div className="col-10 dashboard-content">
                <AdminHeader/>
                <BarChart chartData={chartData}/>
                <AdminCard />
            </div>
        </div>
    )
}

export default AdminHome
