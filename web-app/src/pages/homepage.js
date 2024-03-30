import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {


    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const { data } = await axios.get('http://localhost:4000/api/v1/patient/vitals', { headers: { Authorization: `Bearer ${token}` } });
                console.log(data);
                // Use the 'data' variable here if needed
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div >
            <h6>running okaish</h6>
        </div>

    );
}



export default Dashboard;