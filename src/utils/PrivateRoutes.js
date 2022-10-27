import React from 'react'
import { useContext } from 'react';
import { UserContext } from "../utils/contexts/UserContext";
import { Navigate } from "react-router-dom";

const useAuth = () => {
    let { userProfile } = useContext(UserContext);
    return userProfile?.loggedIn;
}

export default function PrivateRoutes({ children }) {
    const isAuth = useAuth();

    return (
        isAuth ? children : <Navigate to="/login" />
    )
}
