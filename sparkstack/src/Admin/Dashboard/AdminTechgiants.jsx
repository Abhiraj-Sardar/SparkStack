import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { AIDataUtil } from "../utils/AIDataUtil";
import PieChart from './PieChart';
Chart.register(CategoryScale);

const AdminTechgiants = () => {
  const [techGiantsData, setTechGiantsData] = useState({
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
        <h1 className='text-center'>Tech Giants Market Share</h1>
        <div className="row pie-table-container">
          <div className="col-6">
            <PieChart aichartData={techGiantsData} />
          </div>
          <div className="col-6 Ai-table">
            <table className="table  table-success table-striped-columns">
              <thead>
                <th>Headline</th>
                <th>Author</th>
                <th>Resources</th>
                <th>Popularity</th>
              </thead>
              <tbody>
                <tr>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                </tr>
                <tr>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                </tr>
                <tr>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                </tr>
                <tr>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                </tr>
                <tr>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                </tr>
                <tr>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTechgiants
