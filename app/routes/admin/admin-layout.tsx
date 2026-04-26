import React from 'react'
import { Outlet } from "react-router"; // استيراد الـ Outlet

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <h1>Admin layout</h1> {/* هيدر أو سايد بار ثابت */}

            {/* الـ Outlet هو المكان اللي هيترسم فيه الـ Dashboard */}
            <Outlet />
        </div>
    )
}
export default AdminLayout