import React from 'react'
import AdminSidebar from './AdminSidebar'
const Web = () => {
    return (
        <div className="row">
            <div className="col-2">
                <AdminSidebar/>
            </div>
            <div className="col-10 dashboard-content">
                <h1>Hello This is Web Development Part</h1>
            </div>
        </div>
    )
}

export default Web
