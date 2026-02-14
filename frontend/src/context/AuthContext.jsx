import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for saved token and fetch user data
        const token = localStorage.getItem('token');
        if (token) {
            fetchCurrentUser();
        } else {
            setLoading(false);
        }
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get('/auth/me');
            setUser(response.data);
        } catch (error) {
            console.error('Failed to fetch user:', error);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            // Map email to username field as backend allows email login via that field
            const response = await api.post('/auth/login', { username: email, password });
            
            // Backend returns: token, username, email, role, message
            const { token, username, email: userEmail, role } = response.data;

            localStorage.setItem('token', token);
            // Map backend fields to what frontend expects (name, userType)
            const userData = { name: username, email: userEmail, userType: role };
            setUser(userData);

            return userData;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Login failed');
        }
    };

    const signup = async (userData) => {
        try {
            await api.post('/auth/signup', userData);
            // Do not auto-login
            return true;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Signup failed');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
