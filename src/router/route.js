import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';

const PrivateRoute = () => {
    const user = userAuth();
    if(!user.token) return <Navigate to="/login" />;
    return <Outlet />;
};

export default PrivateRoute;