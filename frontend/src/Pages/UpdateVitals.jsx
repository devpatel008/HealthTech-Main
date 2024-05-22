import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateVitals = () => {
    const [heartRate, setHeartRate] = useState("");
    const [spO2, setSpO2] = useState("");
    const [bloodCount, setBloodCount] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    const [temperature, setTemperature] = useState("");
    const [respiratoryRate, setRespiratoryRate] = useState("");
    const [sugarLevel, setSugarLevel] = useState("");
    useEffect(() => {
        const fetchVitals = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4000/api/v1/user/patient/vitals/getlatestvitals",
                    { withCredentials: true }
                );
                // console.log(data.vitals);
                setHeartRate(data.vitals.heartRate );
                setSpO2(data.vitals.spO2);
                setBloodCount(data.vitals.bloodCount);
                setBloodPressure(data.vitals.bloodPressure);
                setTemperature(data.vitals.temperature);
                setRespiratoryRate(data.vitals.respiratoryRate);
                setSugarLevel(data.vitals.sugarLevel);
            } catch (error) {
                setVitals([]);
            }
        };
        fetchVitals();
    }, []);
    
    const handleEdit = (e) => {
        e.preventDefault();
        const vitals = {
            heartRate,
            spO2,
            bloodCount,
            bloodPressure,
            temperature,
            respiratoryRate,
            sugarLevel
        };
        axios.post(`http://localhost:4000/api/v1/user/patient/vitals/addvitals`, vitals, { withCredentials: true })
            .then(() => {
                toast.success("Vitals updated Successfully !");
                // navigate('/');
            })
            .catch((error) => {
                toast.error("Please add all vitals !");
            });
    };
    return (
        <>
            <div className="container form-component register-form">
                <h2>Update Vitals</h2>
                <form onSubmit={handleEdit}>
                    <div className="input-container">
                        <label>Heart Rate</label>
                        <input
                            type="text"
                            placeholder="Set Heart Rate"
                            value={heartRate}
                            onChange={(e) => setHeartRate(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>spO2</label>
                        <input
                            type="text"
                            placeholder="Set SpO2"
                            value={spO2}
                            onChange={(e) => setSpO2(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Blood Count</label>
                        <input
                            type="text"
                            placeholder="Set Blood Count"
                            value={bloodCount}
                            onChange={(e) => setBloodCount(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Blood Pressure</label>
                        <input
                            type="text"
                            placeholder="Set Blood Pressure"
                            value={bloodPressure}
                            onChange={(e) => setBloodPressure(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Temperature</label>
                        <input
                            type="text"
                            placeholder="Set Temperature"
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Respiratory Rate</label>
                        <input
                            type="text"
                            placeholder="Set Respiratory Rate"
                            value={respiratoryRate}
                            onChange={(e) => setRespiratoryRate(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Sugar Level</label>
                        <input
                            type="text"
                            placeholder="Set Sugar Level"
                            value={sugarLevel}
                            onChange={(e) => setSugarLevel(e.target.value)}
                        />
                    </div>
                    <div className="button-container">
                        <button onClick={(e) => handleEdit(e.target.value)}>Update</button>
                    </div>
                </form>
            </div>
        </>
    );}
    

  export default UpdateVitals