import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { loginUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await loginUser({email, password });
            navigate('/dashboard');
        } catch (error) {
            alert('Login Failed');
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button text="Login" onClick={handleLogin} className="bg-blue-500" />
        </div>
    );
};

export default Login;