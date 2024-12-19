// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Create these pages as needed
import Services from './pages/Services';
import Providers from './pages/Providers';
import Bookings from './pages/Bookings';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/providers" element={<Providers />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/signup' element={<SignUp />}/>
                <Route path="/login" element={<Login />} />
                {/* Add more routes as needed */}
            </Routes>
        </div>
    );
};

export default App;
