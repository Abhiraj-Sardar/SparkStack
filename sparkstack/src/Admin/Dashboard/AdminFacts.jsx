import React from 'react'
import AdminSidebar from './AdminSidebar'

const AdminFacts = () => {
  return (
    <div className="row">
            <div className="col-2">
                <AdminSidebar/>
            </div>
            <div className="col-10 dashboard-content">
                <h1>Hello This is Facts </h1>
            </div>
        </div>
  )
}

export default AdminFacts
