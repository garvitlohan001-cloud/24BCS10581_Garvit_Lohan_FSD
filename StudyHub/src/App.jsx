import React from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from './components/Home'
import Task from './components/Task'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <main>
      <h1>STUDYHUB</h1>
      <nav>
        <ul style={{display: "flax", gap: "4px"}}>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/task"}>Task</Link>
            <Link to={"/profile"}>Profile</Link>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/task' element={<Task />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </main>
  )
}

export default App