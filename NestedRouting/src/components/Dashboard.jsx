import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <nav>
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link to={"/dashboard/profile"}>Profile</Link>
            <Link to={"/dashboard/settings"}>Settings</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Dashboard