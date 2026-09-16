import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'

const LeaveContext = createContext();

const LeaveProvider = ({ children }) => {
    const [leaveRequest, setLeaveRequest] = useState(null);

    const value = {
        leaveRequest, 
        setLeaveRequest,
    }

    return (
        <LeaveContext.Provider value={value}>
            {children}
        </LeaveContext.Provider>
    )
}

export default LeaveProvider

export const useLeave = () => useContext(LeaveContext);