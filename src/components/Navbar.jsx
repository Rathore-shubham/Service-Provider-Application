import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="bg-zinc-800 text-white shadow fixed w-full z-20 top-0 left-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <Link to="/" className="text-2xl mt-4 font-bold text-white">Service Provider</Link>
                            </div>
                            {/* Desktop Menu */}
                            <div className="hidden md:flex md:space-x-8 ml-10">
                                <Link to="/" className="text-white hover:text-gray-500 transform transition duration-200 hover:scale-105">Home</Link>
                                <Link to="/services" className="text-white hover:text-gray-500 transform transition duration-200 hover:scale-105">Services</Link>
                                <Link to="/providers" className="text-white hover:text-gray-500 transform transition duration-200 hover:scale-105">Providers</Link>
                                <Link to="/bookings" className="text-white hover:text-gray-500 transform transition duration-200 hover:scale-105">Bookings</Link>
                                <Link to="/about" className="text-white hover:text-gray-500 transform transition duration-200 hover:scale-105">About</Link>
                                <Link to="/contact" className="text-white hover:text-gray-500 transform transition duration-200 hover:scale-105">Contact</Link>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden items-center">
                            <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/signup" className="text-white hover:text-gray-500 transform transition duration-200 hover:scale-105">Sign Up</Link>
                            <Link to="/login" className="text-white hover:text-gray-500 transform transition duration-200 hover:scale-105">Log In</Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu with background blur */}
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" onClick={closeMenu}></div>

                        {/* Mobile Menu */}
                        <div className="fixed inset-0 z-20 flex flex-col bg-zinc-800 w-64 p-4">
                            <div className="flex flex-col space-y-1">
                                <Link to="/" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={closeMenu}>Home</Link>
                                <Link to="/services" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={closeMenu}>Services</Link>
                                <Link to="/providers" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={closeMenu}>Providers</Link>
                                <Link to="/bookings" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={closeMenu}>Bookings</Link>
                                <Link to="/about" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={closeMenu}>About</Link>
                                <Link to="/contact" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={closeMenu}>Contact</Link>
                            </div>
                            <div className="flex flex-col space-y-1 mt-4">
                                <Link to="/signup" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={closeMenu}>Sign Up</Link>
                                <Link to="/login" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={closeMenu}>Log In</Link>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </>
    );
};

export default Navbar;
