
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [heartRate, setHeartRate] = useState(0);
    const [spO2, setSpO2] = useState('');
    const [bloodCount, setBloodCount] = useState('');
    const [bloodPressure, setBloodPressure] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [respiratoryRate, setRespiratoryRate] = useState(0);
    const [sugarLevel, setSugarLevel] = useState(0);
    const [doctor, setDoctor] = useState('');
    const Navigate = useNavigate();
    const token = localStorage.getItem('token');


        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/patient/vitals', { headers: { Authorization: `Bearer ${token}` } });
                const {result} = await response.data;
                console.log(result[0]   )
                setHeartRate(result[0].heartRate);
                setSpO2(result[0].spO2);
                setBloodCount(result[0].bloodCount);
                setBloodPressure(result[0].bloodPressure);
                setTemperature(result[0].temperature);
                setRespiratoryRate(result[0].respiratoryRate);
                setSugarLevel(result[0].sugarLevel);
                setDoctor(result[0].doctor);
                console.log(result);
                
            }
        catch (error) {
                console.log(error);
        }
        };
        fetchData();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{heartRate}</p>
        </div>
    );
}

export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const Dashboard = () => {
//     const [data, setData] = useState(null); // Declare the 'data' variable using useState
//     const Navigate = useNavigate();
//     const token = localStorage.getItem('token');
//     useEffect(() => {
//         const fetchData = async () => {
// const response =  await axios.get('http://localhost:4000/api/v1/patient/vitals', { headers: { Authorization: `Bearer ${token}` } });
// console.log(response);
// const json = await response.json;
// if(response.ok)
// {
//     setData(json);
// }
//             // try {
//             //     const { data } = await axios.get('http://localhost:4000/api/v1/patient/vitals', { headers: { Authorization: `Bearer ${token}` } });
//             //     console.log(data);
                
//             //     setData(data); // Set the 'data' variable using setData
//             // } catch (error) {
//             //     console.log(error);
//             // }
//         };

//         fetchData();
//     }, []);
//     return (
//         <div>
//             <h1>Dashboard</h1>
//         </div>
//                         // <div>
//                         // <button onClick={() => Navigate('/update')}>Go to Update Page</button>
//                         // <p>{data.bloodCount}</p>
//                         // </div>
//     );
// }

// export default Dashboard;



// import styled from 'styled-components';
// import { useState, useEffect } from 'react';
// import { useGlobalContext } from '../context/appContext';
// import FormRow from '../components/FormRow';
// import Navbar from '../components/Navbar';
// import Jobs from '../components/Jobs';

// function Dashboard() {
//   const [data, setData] = useState({});

//   const handleChange = (e) => {
//     setValues({  });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { company, position } = values;
//     if (company && position) {
//       createJob(values);
//       setValues({ company: '', position: '' });
//     }
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:4000/api/v1/patient/vitals', { headers: { Authorization: `Bearer ${token}` } });
//             const {result} = await response.data;
//             console.log(result[0]);
//             if (response.ok) { 
//                 setData(result[0].bloodCount);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     fetchData();
//   }, []);
//   return (
//     <>
//     </>
//   );
// }



// export default Dashboard;