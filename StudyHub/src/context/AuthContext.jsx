import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [student, setStudent] = useState(null)

    const login = (user) => {
        setStudent(user);
    }

    const logout = () => {
        setStudent(null)
    }

    const value =  {
        student,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);