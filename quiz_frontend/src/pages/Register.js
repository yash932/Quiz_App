import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { registerUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await registerUser({ username, email, password });
            navigate('/login');
        } catch (error) {
            alert('Registration Failed!');
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <InputField label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button text="Register" onClick={handleRegister} className="bg-green-500" />
        </div>
    );
};

export default Register;
