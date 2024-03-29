// src/components/RegisterForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Backend URL - Replace with your actual backend URL
        const backendUrl = 'http://localhost:4000/api/v1/auth/register';

        try {
            // if (password !== confirmPassword) {
            //     throw new Error('Passwords do not match');
            // }
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

            // Redirect or perform other actions upon successful registration
            console.log('Registration successful');
            
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
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
                    <label>name:</label>
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
                {/* <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div> */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
