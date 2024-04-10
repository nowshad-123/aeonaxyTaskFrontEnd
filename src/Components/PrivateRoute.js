import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRoute() {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedToken = localStorage.getItem("userData");
                const parsedToken = JSON.parse(storedToken);

                if (!parsedToken.token) {
                    setAuthenticated(false);
                    navigate('/'); // Redirect to signup if token is not present
                } else {

                    const response = await axios.get(`https://aeonaxytaskbackend.onrender.com/userAuth/${parsedToken.token}`);
                    if (response.data.success) {
                        setAuthenticated(true);
                    } else {
                        setAuthenticated(false);
                        navigate('/'); // Redirect to signup if authentication fails
                    }
                }
            } catch (error) {
                console.error('Error while fetching data:', error);
                setAuthenticated(false);
                navigate('/'); // Redirect to signup if an error occurs
            }
        };

        fetchData();
    }, [navigate]);

    return authenticated ? <Outlet /> : null; // Render Outlet if authenticated, otherwise render nothing
}
