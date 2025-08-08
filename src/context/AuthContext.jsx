import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem('user', JSON.stringify(foundUser));
            toast.success('Login successful!');
            navigate('/');
            return true;
        }
        toast.error('Invalid email or password.');
        return false;
    };

    const register = (data) => {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const emailExists = users.some(u => u.email === data.email);

        if (emailExists) {
            toast.error('Email already exists.');
            return false;
        }
        
        const newUser = { email: data.email, password: data.password, name: data.username };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        toast.success('Registration successful! Please log in.');
        navigate('/login');
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        toast.success('Logged out successfully.');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};