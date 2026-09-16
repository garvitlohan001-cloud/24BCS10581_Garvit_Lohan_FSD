import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={"/dashboard"} />} />
      <Route path='/dashboard' element={<Dashboard />} >
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App