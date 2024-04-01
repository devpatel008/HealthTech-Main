import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const UpdateVitals = () => {

    const UV = {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/uv.jpeg"
            })`,
        opacity: "1",
        // height: "screen",
        // width: "screen"
        // height: "100vh",
        // marginTop: "-70px",
        // // fontSize: "50px",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
    };

    const navigate = useNavigate();
    const [heartRate, setHeartRate] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [spO2, setSpO2] = useState('');
    const [bloodCount, setBloodCount] = useState('');
    const [respiratoryRate, setRespiratoryRate] = useState(0);
    const [sugarLevel, setSugarLevel] = useState(0);
    const [loading, setLoading] = useState(false);
    const [doctor, setDoctor] = useState('');
    const token = localStorage.getItem('token')

    useEffect(() => {
        const fetchData = async () => {
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

    const handleSaveVitals = () => {
        const data = {
            heartRate,
            spO2,
            bloodCount,
            bloodPressure,
            temperature,
            respiratoryRate,
            sugarLevel,
            doctor

        };

        setLoading(true);
        axios
            .post('http://localhost:4000/api/v1/patient/editVitals', data, { headers: { Authorization: `Bearer ${token}` } })
            .then(() => {
                setLoading(false);
                navigate('/patient/dashboard');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occurred. Please try again later.');
                console.log(error);
            });
    };
    const updatehandler = () => {
        navigate('/patient/update');
      };
      const logouthandler = () => {
        navigate('/');
      };
      const dashboardhandler = () => {
        navigate('/patient/dashboard');
      }
    return (
        <>
        <nav className="bg-blue-700 p-4">
        <div className="container flex justify-between items-center mx-auto">
          <div className="text-white font-bold text-xl">Patel Pookies</div>
          <div className="flex items-center">
            <button className="text-white mr-6 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 transition duration-200" onClick={updatehandler}>Update Vitals</button>
            <button className="text-white mr-6 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 transition duration-200"  onClick={dashboardhandler}>Dashboard</button>
            <button className="text-white py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 transition duration-200" onClick={logouthandler}>Logout</button>
          </div>
        </div>
      </nav>
        <div style={UV} className='main  h-full w-full'>
            <div className='p-2'>
                {/* <BackButton /> */}
                <h1 className='text-3xl my-1 font-bold'>Update Vitals</h1>
                {/* {loading ? <Spinner /> : ''} */}
                <div className='flex flex-col border-4 border-sky-400 rounded-xl w-[600px] px-4 py-2 mx-auto bg-cyan-100 shadow-gray-950 shadow-2xl'>
                    <div className='my-2'>
                        <label className='text-md mr-4 text-gray-500'>Pulse</label>
                        <input
                            type='number'
                            value={heartRate}
                            onChange={(e) => setHeartRate(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>
                    <div className='my-2'>
                        <label className='text-md mr-4 text-gray-500'>SpO2</label>
                        <input
                            type='text'
                            value={spO2}
                            onChange={(e) => setSpO2(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-2'>
                        <label className='text-md mr-4 text-gray-500'>Blood Count (format : RBC/WBC/Platelet )</label>
                        <input
                            type='text'
                            value={bloodCount}
                            onChange={(e) => setBloodCount(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-2'>
                        <label className='text-md mr-4 text-gray-500'>Blood Pressure (format : Systolic/Diastolic )</label>
                        <input
                            type='number'
                            value={bloodPressure}
                            onChange={(e) => setBloodPressure(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-2'>
                        <label className='text-md mr-4 text-gray-500'>Temperature (in degree Celsius)</label>
                        <input
                            type='number'
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-2'>
                        <label className='text-md mr-4 text-gray-500'> Respiratory Rate </label>
                        <input
                            type='number'
                            value={respiratoryRate}
                            onChange={(e) => setRespiratoryRate(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-2'>
                        <label className='text-md mr-4 text-gray-500'>Sugar Level</label>
                        <input
                            type='number'
                            value={sugarLevel}
                            onChange={(e) => setSugarLevel(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-2'>
                        <label className='text-md mr-4 text-gray-500'>Doctor ID</label>
                        <input
                            type='string'
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>

                    <button className='p-2 bg-gray-500 mt-8 mb-2 hover:bg-gray-200 font-semibold text-white hover:text-black' onClick={handleSaveVitals}>
                        Save
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}
export default UpdateVitals;