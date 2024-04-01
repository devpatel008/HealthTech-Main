import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './assets/profile.jpg'
import { useNavigate } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import {from "react-icons/ai";
const DoctorHome = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);

    const Navigate = useNavigate();
    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:4000/api/v1/doctor/getAllPatients', { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                // console.log({ response })
                // console.log(response.data);
                const data1 = response.data;
                setPatients(data1.patients);
                // console.log(patients);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });


    }, []);


  
    



    return (
        // <div className='p-4'>`
        <>
            <div className='flex h-screen w-screen'>
                <div className='flex-row justify-center content-center bg-gray-700'>
                    <button className='m-2 h-12 rounded-2xl'></button>
                    <p className='mx-1 text-white text-center font-bold'>Dashboard</p>
                    {/* <button className='mt-6 mb-2 mx-2 h-12 rounded-2xl'></button>
                    <p className='mx-1 text-white text-center font-bold'>Messages</p> */}
                    <button className='mt-6 mb-2 mx-2 h-12 rounded-2xl'></button>
                    <p className='mx-1 text-white text-center font-bold'>Logout</p>
                </div>
                {loading ? <></> : (
                    <div class="w-4/5">
                        {/* <!-- Grid Layout --> */}
                        <div class="overflow-y-auto grid grid-cols-2 gap-4 p-8 max-h-screen">
                            {/* <!-- First Column --> */}
                            {patients.length > 0 ? (
                                patients.map((patient, index) => (
                                    <div key={patient._id} class="bg-gray-200 p-4 flex max-w-2/5 max-h-52">
                                        {/* <!-- Content for first column --> */}
                                        <img src={Profile} alt="Profile Pic" className='y-auto rounded-[32px] mx-auto w-40' />
                                        <div className='mx-4 my-8'>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            <Link to={`/doctor/patientdetails/${patient._id}`}>
                                                <AiFillEye />
                                            </Link>
                                        </div>
                                            <h2 className="text-xl font-semibold mb-4 text-blue-800 underline decoration-double cursor-pointer hover:text-blue-600" ></h2>
                                            <p className='text-sm text-blue-500 my-2 underline decoration-solid'>{patient.name}</p>
                                            <p className='text-sm text-blue-500 my-2 underline decoration-solid'>{patient.email}</p>
                                        </div>
                                    </div>

                                ))
                            ) : (
                                <div>NO PATIENTS CURRENTLY UNDER YOU</div>
                            )}

                            {/* // <!-- Second Column --> */}
                            {/* <div class="bg-gray-200 p-4"> */}
                            {/* <!-- Content for second column --> */}
                            {/* <h2 class="text-xl font-semibold mb-4">Second Column</h2> */}
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            {/* </div>  */}
                        </div>
                    </div>
                )}
            </div>
            {/* // </div > */}
        </>
    );
};

export default DoctorHome;

