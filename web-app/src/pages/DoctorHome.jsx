import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
const DoctorHome = () => {
    const [patients,setPatients ] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:4000/api/v1/doctor/getAllPatients' , { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                console.log(response)
                // console.log(response.data);
                const data1 =  response.data;
                setPatients(data1.patients);
                console.log(patients);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });


    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl my-8'>PatientsList</h1>
                </div> 
                {loading ? <></>: (
                    <table className='w-full border-seperte border-spacing-2'>
                        <thead>
                            <tr>
                                <th className='border border-slate-600 rounded-md'>No</th>
                                <th className='border border-slate-600 rounded-md'>Name</th>
                                <th className='border border-slate-600 rounded-md'>Email</th>
                                <th className='border border-slate-600 rounded-md'>Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.length > 0 ? (
                            patients.map((patient, index) => (
                                console.log(patient),
                                    <tr key={patient._id} className='h-8'>
                                        <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                                        <td className='border border-slate-700 rounded-md text-center'>{patient.name}</td>
                                        <td className='border border-slate-700 rounded-md text-center'>{patient.email}</td>
                                        <td className='border border-slate-700 rounded-md text-center'>{patient._id}</td>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                            <div className='flex justify-center items-center gap-x-4'>
                                                <Link to={`/doctor/patientdetails/${patient._id}`}>
                                                    <AiFillEye />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className='border border-slate-700 rounded-md text-center'>No patients found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default DoctorHome;

