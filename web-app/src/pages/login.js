// src/components/LoginForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Backend URL - Replace with your actual backend URL
        const backendUrl = 'http://localhost:4000/api/v1/auth/login';

        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            // Redirect or perform other actions upon successful login
            console.log('Login successful');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
        <html>  
<body>
        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                <label for="username">Username</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                <label for="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        <div>
    <button onClick={() => navigate('/register')}>Register</button>
</div>
</body>
</html>
        </>

    );
};

export default LoginForm;






