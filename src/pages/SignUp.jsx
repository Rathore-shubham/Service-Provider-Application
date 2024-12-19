// src/pages/SignUp.jsx
import React, { useState } from 'react';
import './SignIn.css'; // Ensure this file contains your styles
import checkedRed from '../assets/checked_red.png';  // Import the red image
import checkedGreen from '../assets/checked_green.png'; // Import the green image

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer', // Default role
    });

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate email and password
        if (name === 'email') {
            // Simple email validation
            setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        } else if (name === 'password') {
            // Password must be at least 6 characters
            setIsPasswordValid(value.length >= 6);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log(formData);
        alert('Sign Up successful!');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-zinc-900">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="logo mb-6">
                    <img src="logo.png" alt="Logo" />
                </div>
                <h1 className="text-white text-2xl font-bold mb-4">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your email"
                        required
                        className={`w-full p-2 mb-4 rounded-lg border ${
                            isEmailValid ? 'border-green-500' : 'border-red-500'
                        } text-white bg-gray-900`}
                        style={{
                            backgroundImage: isEmailValid ? `url(${checkedGreen})` : isEmailValid === false ? `url(${checkedRed})` : 'none',
                            backgroundSize: '20px',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'calc(100% - 10px)',
                        }}
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        minLength="6"
                        required
                        className={`w-full p-2 mb-2 rounded-lg border ${
                            isPasswordValid ? 'border-green-500' : 'border-red-500'
                        } text-white bg-gray-900`}
                        style={{
                            backgroundImage: isPasswordValid ? `url(${checkedGreen})` : isPasswordValid === false ? `url(${checkedRed})` : 'none',
                            backgroundSize: '20px',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'calc(100% - 10px)',
                        }}
                        onChange={handleChange}
                    />
                    <p className="text-white">Password must be at least 6 characters</p>
                    <button type="submit" className="w-full bg-white text-gray-900 py-2 rounded-md mt-4">Sign Up</button>
                    <p className="text-white mt-2">Sign in using magic link</p>
                    <div className="or text-white text-center">or</div>
                    <button className="sso w-full bg-gray-700 text-white py-2 rounded-md mt-2" type="button">Login with phone number</button>
                    <p className="text-white mt-4">
                        You acknowledge that you read, and agree, to our <a href="#" className="underline">Terms of Service</a> and our <a href="#" className="underline">Privacy Policy</a>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
