import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Profile from './assets/profile.jpg'
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';

const ShowPatient = () => {
const token = localStorage.getItem('token');
const [patientVitals, setPatientVitals] = useState({});
const [patientHistory, setPatientHistory] = useState({});
const [prescription, setPrescription] = useState('');
const [loading, setLoading] = useState(false);
const { id } = useParams();
// console.log(id);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/v1/doctor/getPatientVitals/${id}` , { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
          const json1 =  response.json();
          setPatientVitals(json1);
          console.log(json1);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);



  const handlePrescriptionChange = (event) => {
      setPrescription(event.target.value);
  };
  
  const handleSubmit = () => {
      axios
          .post(`http://localhost:4000/api/v1/doctor/medication/${id}`, { prescription }, { headers: { Authorization: `Bearer ${token}` } })
          .then((response) => {
            setPrescription('');
            //   console.log(response.data);
              // Perform any additional actions after successful post request
          })
          .catch((error) => {
            setPrescription('');
              console.log(error);
              // Handle error if necessary
          });
  };
  



  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/v1/doctor/getPatientHistory/${id}` , { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log(response.data);
        setPatientHistory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
        <div className='flex h-screen w-screen'>
            <div className='flex-row justify-center content-center bg-gray-700'>
                <button className='m-2 h-12 rounded-2xl'></button>
                <p className='mx-1 text-white text-center font-bold'>Dashboard</p>
                <button className='mt-6 mb-2 mx-2 h-12 rounded-2xl'></button>
                <p className='mx-1 text-white text-center font-bold'>Messages</p>
                <button className='mt-6 mb-2 mx-2 h-12 rounded-2xl'></button>
                <p className='mx-1 text-white text-center font-bold'>Logout</p>
            </div>
            <div className='w-full h-full'>
                <div className='border h-10 border-slate-300 '>Back</div>
                <div className='flex h-[94%] w-full'>
                    <div className='w-1/4 bg-white'>
                        <img src={Profile} alt="Profile" className='mt-16 rounded-[120px] mx-auto' />
                        <p className='PatientName mx-auto text-center font-bold my-2'>{patientHistory.name}</p>
                        <p className='font-semibold m-2'>General Info</p>
                        <div className='flex-row content-center'>
                            <div className='flex'>
                                <p className='w-1/2 ml-4'>Age</p>
                                <p className='Fetch w-full text-center'>{patientHistory.age}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-1/2 ml-4'>Gender</p>
                                <p className='Fetch w-full text-center'>{patientHistory.gender}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-1/2 ml-4'>ID</p>
                                <p className='Fetch w-full text-center'>{id}</p>

                            </div>
                            {/* <input type='textarea' className='overflow-y-auto max-h-48 w-80 mt-8 mx-8 border-2 border-black hover:border-4 hover:border-gray-700'></input> */}
                            <textarea className='overflow-y-auto max-h-48 w-80 mt-8 mx-8 border-2 border-black hover:border-4 hover:border-gray-700' value={prescription} onChange={handlePrescriptionChange}></textarea>
          <button className='mt-2 mx-20 border bg-blue-500 border-black text-white font-semibold rounded-lg hover:bg-cyan-500 w-56' onClick={handleSubmit}>Send Prescription</button>
                            {/* <button>Send </button> */}
                        </div>
                    </div>
                    <div className='w-full h-full bg-gray-100'>
                        {/* <div className='grid-rows-1 divide-y divide-gray-400'> */}
                        <div className='flex space-x-8 mx-4 my-4 h-2 w-1/4'>
                            <button className='font-semibold underline decoration-black'>Overview</button>
                            <button className='font-semibold underline decoration-black'>Medical History</button>
                        </div>
                        {/* <div></div> */}
                        {/* </div> */}
                        <div className="grid grid-cols-4 gap-2 w-full h-[94%]">
                            {/* <!-- Card 1 --> */}
                            <div className="bg-gray-600 p-4 rounded-lg shadow-2xl m-4">
                                <h2 className="text-lg font-semibold mb-2 text-blue-400">Current Ailments</h2>
                                <div className='overflow-y-auto max-h-56 text-blue-200'>
                                    <p>Dhyey Randi </p>
                                </div>
                            </div>

                            {/* <!-- Card 2 --> */}
                            <div className="bg-cyan-100 p-4 rounded-lg shadow-md m-4" >
                                <h2 className="text-lg font-semibold mb-2">Heart Rate</h2>
                                <p>{patientVitals.heartRate}</p>
                            </div>

                            {/* <!-- Card 3 --> */}
                            <div className="bg-cyan-100 p-4 rounded-lg shadow-md m-4" >
                                <h2 className="text-lg font-semibold mb-2">Blood Pressure</h2>
                                <p>{patientVitals.bloodPressure}</p>
                            </div>

                            {/* <!-- Card 4 --> */}
                            <div className="bg-cyan-100 p-4 rounded-lg shadow-md m-4 " >
                                <h2 className="text-lg font-semibold mb-2">spO2</h2>
                                <p>{patientVitals.spO2}.</p>
                            </div>

                            {/* <!-- Card 5 --> */}
                            <div className="bg-cyan-100 p-4 rounded-lg shadow-md m-4" >
                                <h2 className="text-lg font-semibold ">Respiratory Rate</h2>
                                <p>{patientVitals.respiratoryRate}</p>
                            </div>

                            {/* <!-- Card 6 --> */}
                            <div className="bg-cyan-100 p-4 rounded-lg shadow-md m-4" >
                                <h2 className="text-lg font-semibold ">Blood Count (RBC/WBC/Platelets)</h2>
                                <p>{patientVitals.bloodCount}</p>
                            </div>

                            {/* <!-- Card 7 --> */}
                            <div className="bg-cyan-100 p-4 rounded-lg shadow-md m-4" >
                                <h2 className="text-lg font-semibold ">Temperature</h2>
                                <p>{patientVitals.temperature}</p>
                            </div>

                            {/* <!-- Card 8 --> */}
                            <div className="bg-cyan-100 p-4 rounded-lg shadow-md m-4" >
                                <h2 className="text-lg font-semibold ">Sugar Level</h2>
                                <p>{patientVitals.sugarLevel}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
)
};

export default ShowPatient;