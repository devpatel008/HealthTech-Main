import React, { useState } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('Patient');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const backendUrl = 'http://localhost:4000/api/v1/auth/register';

        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name, password }),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            console.log('Registration successful');

            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <style>
                {`
                    *,
                    *:before,
                    *:after {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    body {
                        background-color: #080710;
                    }
                    .background {
                        width: 430px;
                        height: 520px;
                        position: absolute;
                        transform: translate(-50%, -50%);
                        left: 50%;
                        top: 50%;
                    }
                    .background .shape {
                        height: 200px;
                        width: 200px;
                        position: absolute;
                        border-radius: 50%;
                    }
                    .shape:first-child {
                        background: linear-gradient(#1845ad, #23a2f6);
                        left: -80px;
                        top: -80px;
                    }
                    .shape:last-child {
                        background: linear-gradient(to right, #ff512f, #f09819);
                        right: -30px;
                        bottom: -80px;
                    }
                    form {
                        height: 520px;
                        width: 400px;
                        background-color: rgba(255, 255, 255, 0.13);
                        position: absolute;
                        transform: translate(-50%, -50%);
                        top: 50%;
                        left: 50%;
                        border-radius: 10px;
                        backdrop-filter: blur(10px);
                        border: 2px solid rgba(255, 255, 255, 0.1);
                        box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
                        padding: 50px 35px;
                    }
                    form * {
                        font-family: 'Poppins', sans-serif;
                        color: #ffffff;
                        letter-spacing: 0.5px;
                        outline: none;
                        border: none;
                    }
                    form h2 {
                        font-size: 32px;
                        font-weight: 500;
                        line-height: 42px;
                        text-align: center;
                    }
                    label {
                        display: block;
                        margin-top: 30px;
                        font-size: 16px;
                        font-weight: 500;
                    }
                    input {
                        display: block;
                        height: 50px;
                        width: 100%;
                        background-color: rgba(255, 255, 255, 0.07);
                        border-radius: 3px;
                        padding: 0 10px;
                        margin-top: 15px;
                        font-size: 14px;
                        font-weight: 300;
                    }
                    ::placeholder {
                        color: #e5e5e5;
                    }
                    button {
                        margin-top: 30px;
                        width: 100%;
                        background-color: #ffffff;
                        color: #080710;
                        padding: 15px 0;
                        font-size: 18px;
                        font-weight: 600;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                `}
            </style>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div>
                <h2>Register</h2>

                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <label htmlFor="role">Role</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="Patient" >Patient</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
};

export default RegisterForm;