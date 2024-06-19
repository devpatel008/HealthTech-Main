import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../main';

const UserFetch = () => {
    const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
    const location = useLocation();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/v1/user/patient/me",
                    {
                        withCredentials: true,
                    }
                );
                setIsAuthenticated(true);
                setUser(response.data.user);
            } catch (error) {
                setIsAuthenticated(false);
                setUser({});
                console.log(error);
            }
        };

        const fetchDoctor = async () => {
            // Your logic to fetch doctor-specific data
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/v1/user/doctor/me",
                    {
                        withCredentials: true,
                    }
                );
                // Handle the response and set the doctor data in your context/state
                console.log("Doctor data:", response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (location.pathname.startsWith("/Doctor")) {
            fetchDoctor();
        } else {
            fetchUser();
        }
    }, [isAuthenticated, location.pathname]);

    return null; // This component doesn't need to render anything
};

export default UserFetch;