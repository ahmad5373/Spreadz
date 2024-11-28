import { jwtDecode } from 'jwt-decode';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken, setToken } from '../auth/AuthCheck';
import { getSingleUser } from '../../apiUtils/UserApi';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchUser = async () => {
        const token = getToken('jwtToken');
        try {
            const decoded = jwtDecode(token);
            const userResponse = await getSingleUser(decoded?.user?._id, token);
            setUser(userResponse?.data?.data);
            setLoading(false);
        } catch (error) {
            console.log("error.. =>", error);
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchUser();
    }, [navigate]);

    const login = (token,user) => {
        setToken(token)
        setUser(user)
    };

    const logout = () => {
        removeToken('jwtToken');
        setUser(null);
        navigate('/login');
    };

    const refreshUser = fetchUser;
    if (loading) return <div>loading....</div>

    return (
        <AuthContext.Provider value={{ user, login, logout, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
};
