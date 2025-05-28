import React from 'react';
import { Navigate, Outlet } from 'react-router';

export default function ProtectedRoutes() {
    const USER = null

    return USER ? <Outlet /> : <Navigate to="/login" />
}