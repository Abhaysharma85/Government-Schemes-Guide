import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for saved user in localStorage on mount
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock login logic
        // In a real app, this would be an API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'admin@gov.in' && password === 'admin123') {
                    const adminUser = { name: 'Admin User', email, role: 'admin' };
                    setUser(adminUser);
                    localStorage.setItem('user', JSON.stringify(adminUser));
                    resolve(adminUser);
                } else if (email && password) {
                    // Allow any other user for demo purposes
                    const normalUser = { name: 'Citizen User', email, role: 'user' };
                    setUser(normalUser);
                    localStorage.setItem('user', JSON.stringify(normalUser));
                    resolve(normalUser);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };

    const signup = async (userData) => {
        // Mock signup logic
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = { ...userData, role: 'user' }; // Default to user role
                setUser(newUser);
                localStorage.setItem('user', JSON.stringify(newUser));
                resolve(newUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
