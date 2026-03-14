import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children}) {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        axios.get((process.env.REACT_APP_BACKEND_URL + "/me") || "http://localhost:8000/api/me", {
            withCredentials: true
        })
        .then(() => setAuth(true))
        .catch(() => setAuth(false));
    }, []);

    if (auth == null) {
        return <p>Checking authentication...</p>;
    }

    return auth ? children : <Navigate to="/login" />;
}
