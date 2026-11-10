// ProtectedRoute?
// Even if someone manually enters /profile, our React application should check whether user exists before displaying the page.
import React from 'react'
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    return (
        user ? children : <Navigate to="/auth" />
    );
}

export default ProtectedRoute