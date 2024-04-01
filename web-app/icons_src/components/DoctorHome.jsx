import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
const DoctorHome = () => {
    const [patients, ] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
        

            
    // }, []);

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
                            {/* {patients.map((patient, index) => ( */}
                                <tr className='h-8'>
                                    <td className='border border-slate-700 rounded-md text-center'>sample</td>
                                    <td className='border border-slate-700 rounded-md text-center'>sample</td>
                                    <td className='border border-slate-700 rounded-md text-center'>sample</td>
                                    <td className='border border-slate-700 rounded-md text-center'>sample</td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            {/* <Link to={`/patient/`}> */}
                                                <AiFillEye />
                                            {/* </Link> */}
                                        </div>
                                    </td>
                                </tr>
                            {/* ))} */}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default DoctorHome;