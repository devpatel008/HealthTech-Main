import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const UpdateVitals = () => {

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [cheifComplaint, setCheifComplaint] = useState('');
    const [presentIllness, setPresentIllness] = useState([]);
    const [bloodGroup, setBloodGroup] = useState('');
    const [onMedications, setOnMedications] = useState('');
    const [alcoholConsumer, setAlcoholConsumer] = useState('');
    const [tobaccoConsumer, setTobaccoConsumer] = useState('');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    // useEffect(() => {
    //     axios.get('http://localhost:4000/api/v1/patient/vitals', { headers: { Authorization: `Bearer ${token}` } })
    //         .then((response) => {
    //             console.log(response.data);
    //             setHeartRate(response.data.heartRate);
    //             setBloodPressure(response.data.bloodPressure);
    //             setTemperature(response.data.temperature);
    //             setSpO2(response.data.spO2);
    //             setBloodCount(response.data.bloodCount);
    //             setRespiratoryRate(response.data.respiratoryRate);
    //             setSugarLevel(response.data.sugarLevel);
    //             setDoctor(response.data.doctor);
    //         })
    // }
    //     , []);

    const addHistory = () => {
        const data1 = {
            dateOfBirth,
            fullName,
            age,
            weight,
            height,
            cheifComplaint,
            presentIllness,
            bloodGroup,
            onMedications,
            alcoholConsumer,
            tobaccoConsumer,

        };

        setLoading(true);


        axios
            .post('http://localhost:4000/api/v1/patient/addHistory', data, { headers: { Authorization: `Bearer ${token}` } })
            .then(() => {
                setLoading(false);
                navigate('/dashboard');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occurred. Please try again later.');
                console.log(error);
            });
    };
    return (
        <>
            <div className='p-4'>
                {/* <BackButton /> */}
                <h1 className='text-3xl my-4'>Add History</h1>
                {/* {loading ? <Spinner /> : ''} */}
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Pulse</label>
                        <input
                            type='number'
                            value={heartRate}
                            onChange={(e) => setHeartRate(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>SpO2</label>
                        <input
                            type='text'
                            value={spO2}
                            onChange={(e) => setSpO2(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Blood Count (format : RBC/WBC/Platelet )</label>
                        <input
                            type='text'
                            value={bloodCount}
                            onChange={(e) => setBloodCount(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Blood Pressure (format : Systolic/Diastolic )</label>
                        <input
                            type='text'
                            value={bloodPressure}
                            onChange={(e) => setBloodPressure(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Temperature (in degree Celsius)</label>
                        <input
                            type='number'
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'> Respiratory Rate </label>
                        <input
                            type='number'
                            value={respiratoryRate}
                            onChange={(e) => setRespiratoryRate(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Sugar Level</label>
                        <input
                            type='number'
                            value={sugarLevel}
                            onChange={(e) => setSugarLevel(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Doctor ID</label>
                        <input
                            type='text'
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>

                    <button className='p-2 bg-sky-300 m-8' onClick={handleSaveVitals}>
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}
export default addHistory;