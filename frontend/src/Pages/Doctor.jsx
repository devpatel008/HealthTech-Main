import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Doctor = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4000/api/v1/appointment/getDocApp",
                    { withCredentials: true }
                );
                setAppointments(data.appointments);
            } catch (error) {
                setAppointments([]);
            }
        };
        fetchAppointments();
    }, []);
    // useEffect(() => {
    //     const fetchAppointments = async () => {
    //         try {
    //             const { data } = await axios.get(
    //                 "http://localhost:4000/api/v1/appointment/getall",
    //                 { withCredentials: true }
    //             );
    //             setAppointments(data.appointments);
    //         } catch (error) {
    //             setAppointments([]);
    //         }
    //     };
    //     fetchAppointments();
    // }, []);

    // const handleUpdateStatus = async (appointmentId, status) => {
    //     try {
    //         const { data } = await axios.put(
    //             `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
    //             { status },
    //             { withCredentials: true }
    //         );
    //         setAppointments((prevAppointments) =>
    //             prevAppointments.map((appointment) =>
    //                 appointment._id === appointmentId
    //                     ? { ...appointment, status }
    //                     : appointment
    //             )
    //         );
    //         toast.success(data.message);
    //     } catch (error) {
    //         toast.error(error.response.data.message);
    //     }
    // };

    const { isAuthenticated, admin } = useContext(Context);
    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }

    return (
        <>
            <section className="dashboard page">
                <div className="banner">
                    <div className="firstBox">
                        <img src="/doc.png" alt="docImg" />
                        <div className="content">
                            <div>
                                <p>Hello ,</p>
                                <h5>
                                    {admin &&
                                        `${admin.firstName} ${admin.lastName}`}{" "}
                                </h5>
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
                                Assumenda repellendus necessitatibus itaque.
                            </p>
                        </div>
                    </div>
                    <div className="secondBox">
                        <p>Total Appointments</p>
                        <h3>1500</h3>
                    </div>
                    <div className="thirdBox">
                        <p>Registered Doctors</p>
                        <h3>10</h3>
                    </div>
                </div>
                <div className="banner">
                    <h5>Appointments</h5>
                    <table>
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Date</th>
                                <th>Visited</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments && appointments.length > 0
                                ? appointments.map((appointment) => (
                                    <tr key={appointment._id}>
                                        <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                                        <td>{appointment.appointment_date.substring(0, 16)}</td>
                                        <td>{appointment.hasVisited === true ? <GoCheckCircleFill className="green" /> : <AiFillCloseCircle className="red" />}</td>
                                    </tr>
                                ))
                                : (
                                    <tr>
                                        <td colSpan="3">No Appointments Found!</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>

                    { }
                </div>
            </section>
        </>
    );
};

export default Doctor;