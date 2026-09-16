import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router';

const Profile = () => {
    const {student, logout} = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {

        return () => {

        }
    }, [])

    useEffect(() => {
        if(!student) {
            navigate("/login", {replace: true})
            return;
        }
    }, [student])
    

    const onLogout = () => {
        logout();
        navigate("/home", {replace: true});
    }

    return (
        student && (
            <div>
                <h3>Student Details</h3>
                <p>Name: {student?.name}</p>
                <p>Email: {student?.email}</p>
                <p>Year: {student?.year}</p>
                <button onClick={onLogout}>Logout</button>
            </div>
        )
    )
}

export default Profile