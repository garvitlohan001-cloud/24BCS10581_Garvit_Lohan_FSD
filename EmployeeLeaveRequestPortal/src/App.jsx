import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Dashboard from './components/Dashboard'
import { useLeave } from './context/LeaveContext'

const App = () => {
  const [employees, setEmployees] = useState(
    [
      {
        name: "Rahul",
        department: "Engineering",
        leaveBalance: 10,
      },
      {
        name: "Ajay",
        department: "Engineering",
        leaveBalance: 2,
      },
      {
        name: "Raj",
        department: "Engineering",
        leaveBalance: 3,
      },
    ]
  );

  const {leaveRequest, setLeaveRequest} = useLeave();

  const onApplyLeave = (ind) => {
    setLeaveRequest(employees[ind]);
  }

  return (
    <main>
      <div>
        <h2>Employees</h2>
        {employees.map((emp, ind) => (
          <div key={ind}>
            <p>{emp.name}</p>
            <p>{emp.department}</p>
            <p>{emp.leaveBalance}</p>
            <button onClick={() => onApplyLeave(ind)}>Apply Leave</button>
          </div>
        ))}
      </div>

      <Dashboard />
    </main>
  )
}

export default App