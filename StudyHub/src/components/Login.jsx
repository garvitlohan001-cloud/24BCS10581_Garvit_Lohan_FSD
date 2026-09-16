import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const {login} = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [year, setYear] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, year)
        const user = {name, email, year}
        login(user);
        navigate("/task", {replace: true})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    name='name' 
                    placeholder='Enter your name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input 
                    type='email'
                    name='email' 
                    placeholder='Enter your email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type='text'
                    name='year' 
                    placeholder='Enter your year' 
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login