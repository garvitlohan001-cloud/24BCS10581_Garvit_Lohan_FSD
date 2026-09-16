import React from 'react'
import { useLeave } from '../context/LeaveContext'

const LeaveSection = () => {
  const {leaveRequest, setLeaveRequest} = useLeave();

  return (
    <div>
        <h2>Leave Section</h2>
        {leaveRequest ? (
            <div>
                <p>{leaveRequest.name}</p>
                <p>{leaveRequest.department}</p>
                <p>{leaveRequest.leaveBalance}</p>
                <button onClick={() => setLeaveRequest(null)}>Approve</button>
            </div>
        ) : (
            <p>No leave has been applied</p>
        )}
    </div>
  )
}

export default LeaveSection