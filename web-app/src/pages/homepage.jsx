import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import axios from 'axios';

import blco from './assets/blco.png';
import blpr from './assets/blpr.png';
import blsu from './assets/blsu.png';
import rate from './assets/rate.png';
import rera from './assets/rera.png';
import spo2 from './assets/spo2.png';
import sthe from './assets/sthe.png';
import temp from './assets/temp.png';

const Dashboard = () => {
  const [msg, setMsg] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/patient/vitals', { headers: { Authorization: `Bearer ${token}` } });
        const { result } = await response.data;
        console.log(result[0])
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
    const fetchMsg = async () => {
      try {
        const message = await axios.get('http://localhost:4000/api/v1/patient/allMedications', { headers: { Authorization: `Bearer ${token}` } })
        console.log(message)
        setMsg(message.data.Medications)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMsg();
    fetchData();
  }, []);

  const updatehandler = () => {
    Navigate('/patient/update');
  };
  const logouthandler = () => {
    Navigate('/');
  }

  return (
    <div style={{ fontFamily: 'serif', fontSize: '18px' }}>
      {/* Navigation Bar */}
      <nav className="bg-blue-700 p-4">
        <div className="container flex justify-between items-center mx-auto">
          <div className="text-white font-bold text-xl">Patel Pookies</div>
          <div className="flex items-center">
            <button className="text-white mr-6 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 transition duration-200" onClick={updatehandler}>Update Vitals</button>
            <button className="text-white mr-6 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 transition duration-200">Dashboard</button>
            <button className="text-white py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 transition duration-200" onClick={logouthandler}>Logout</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex h-screen justify-around">
        {/* Left Division (40%) */}
        <div className="w-2/5 bg-blue-300 p-4 border border-gray-300 rounded-lg m-4">
          <iframe className="embedded-html h-full w-full" src="tasks.html" frameBorder="0"></iframe>

          Left Division
        </div>

        {/* Right Division (60%) */}
        <div className="w-3/5 bg-white p-4 border border-gray-300 rounded-lg m-4">
          {/* First Horizontal Division (1/3) */}

          {/* Third Horizontal Division (1/3) */}
          <div className="h-1/4 bg-white flex rounded-lg shadow-lg m-4">
            {/* Left Vertical Column (50%) */}
            <div className="w-1/2 bg-white p-4 border border-gray-400 rounded-lg shadow-lg m-4">

              <div >
                <h2 className="text-center text-gray-900 font-bold mb-4" style={{ fontSize: '15px' }}>Switch Mode</h2>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio h-4 w-4 text-blue-600 mx-" name="radio" />
                  <span className="ml-2 text-blue-800 font-bold " style={{ fontSize: '15px' }}>Realtime</span>
                </label>
              </div>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio h-4 w-4 text-blue-600" name="radio" />
                  <span className="ml-2 text-blue-800 font-bold" style={{ fontSize: '15px' }}>History</span>
                </label>
              </div>
            </div>



            {/* Right Vertical Column (50%) */}
            <div className="w-1/2 bg-white p-4 border border-gray-400 rounded-lg shadow-lg m-4">
              <div className="h-full overflow-y-auto">
                <h2 className="text-center text-gray-900 font-bold mb-4" style={{ fontSize: '15px' }}>Doctor's Advice</h2>

                <ul className="list-none">
                  {(msg.length > 0) ? (
                    msg.map((mg, index) => {

                      <li className="text-gray-900 font-semibold mb-2">
                        <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> {index}. {mg}
                      </li>
                    })
                  ) : (<></>)}
                  {/* <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 1
                  </li>
                  <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 2
                  </li>
                  <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 3
                  </li>
                  <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 4
                  </li>
                  <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 5
                  </li>
                  <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 6
                  </li>
                  <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 7
                  </li>
                  <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 8
                  </li>
                  <li className="text-gray-900 font-semibold mb-2">
                    <span className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2">●</span> Item 9
                  </li> */}
                  {/* Add more items as needed */}
                </ul>
              </div>
            </div>
          </div>

          {/* Second Horizontal Division (1/3) */}
          <div className="h-2/6 bg-white mb-4 rounded-lg shadow-lg p-4">
            {/* Four Vertical Cards */}
            <div className="flex h-full justify-between">
              <div className="w-1/4 bg-white p-4 border-4 border-blue-500 rounded-lg m-4 text-center relative">
                <div className="bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${rate})`, opacity: '0.2', width: '100%', height: '100%' }}></div>
                <p className="absolute inset-x-0 top-3 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>Heart Rate </p>
                <p className="absolute inset-x-0 top-24 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>{heartRate}</p>

              </div>

              <div className="w-1/4 bg-white p-4 border-4 border-blue-500 rounded-lg m-4 text-center relative">
                <div className="bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${rera})`, opacity: '0.2', width: '100%', height: '100%' }}></div>
                <p className="absolute inset-x-0 top-3  text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>Respiratory Rate</p>
                <p className="absolute inset-x-0 top-24 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>{respiratoryRate}</p>

              </div>

              <div className="w-1/4 bg-white p-4 border-4 border-blue-500 rounded-lg m-4 text-center relative">
                <div className="bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${blpr})`, opacity: '0.2', width: '100%', height: '100%' }}></div>
                <p className="absolute inset-x-0 top-3 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>Blood Pressure</p>
                <p className="absolute inset-x-0 top-24 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>{bloodPressure}</p>

              </div>

              <div className="w-1/4 bg-white p-4 border-4 border-blue-500 rounded-lg m-4 text-center relative">
                <div className="bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${spo2})`, opacity: '0.2', width: '100%', height: '100%' }}></div>
                <p className="absolute inset-x-0 top-3 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>Spo2</p>
                <p className="absolute inset-x-0 top-24 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>{spO2}</p>

              </div>
            </div>
          </div>

          <div className="h-2/6 bg-white mb-4 rounded-lg shadow-lg p-4">
            {/* Four Vertical Cards */}
            <div className="flex h-full justify-between">
              <div className="w-1/4 bg-white p-4 border-4 border-blue-500 rounded-lg m-4 text-center relative">
                <div className="bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${temp})`, opacity: '0.2', width: '100%', height: '100%' }}></div>
                <p className="absolute inset-x-0 top-3 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>Temperature</p>
                <p className="absolute inset-x-0 top-24 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>{temperature}</p>

              </div>

              <div className="w-1/4 bg-white p-4 border-4 border-blue-500 rounded-lg m-4 text-center relative">
                <div className="bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${blsu})`, opacity: '0.2', width: '100%', height: '100%' }}></div>
                <p className="absolute inset-x-0 top-3  text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>Blood Sugar</p>
                <p className="absolute inset-x-0 top-24 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>{sugarLevel}</p>

              </div>

              <div className="w-1/4 bg-white p-4 border-4 border-blue-500 rounded-lg m-4 text-center relative">
                <div className="bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${blco})`, opacity: '0.2', width: '100%', height: '100%' }}></div>
                <p className="absolute inset-x-0 top-3 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>Blood Count</p>
                <p className="absolute inset-x-0 top-24 text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>{bloodCount}</p>

              </div>

              <div className="w-1/4 bg-white p-4 border-4 border-blue-500 rounded-lg m-4 text-center relative">
                <div className="bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${sthe})`, opacity: '0.2', width: '100%', height: '100%' }}></div>
                <p className="absolute inset-x-0 top-3  text-gray-900 font-bold py-2" style={{ fontSize: '15px' }}>Your Doctor ID</p>
                <p className="absolute inset-x-0 top-24 text-gray-900 py-2
                font-bold " style={{ fontSize: '12px' }}>{doctor}</p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
