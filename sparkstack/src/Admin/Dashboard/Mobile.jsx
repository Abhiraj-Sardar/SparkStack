import React from 'react'
import AdminSidebar from './AdminSidebar'
const Mobile = () => {
  return (
    <div className="row">
            <div className="col-2">
                <AdminSidebar/>
            </div>
            <div className="col-10 dashboard-content">
                <h1>Hello This is Technical jobs Part</h1>
            </div>
        </div>
  )
}

export default Mobile
