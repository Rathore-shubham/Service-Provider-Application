import React, { useEffect, useState } from 'react';
import dummyProviders from '../api/providers'; // Dummy data for providers

const Providers = () => {
    const [providers, setProviders] = useState([]);
    const [newProvider, setNewProvider] = useState({
        user: '',
        services: [],
        ratings: 0,
        experience: '',
        location: '',
    });

    // Load dummy providers
    useEffect(() => {
        setProviders(dummyProviders);
    }, []);

    // Handle input changes for the new provider form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProvider((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle adding a new provider
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new provider object
        const addedProvider = {
            _id: (providers.length + 1).toString(), // Generate a new ID
            ...newProvider,
        };

        // Update the providers state
        setProviders((prev) => [...prev, addedProvider]);

        // Reset the form
        setNewProvider({
            user: '',
            services: [],
            ratings: 0,
            experience: '',
            location: '',
        });
    };

    // Handle deleting a provider
    const handleDelete = (id) => {
        setProviders((prev) => prev.filter(provider => provider._id !== id));
    };

    return (
        <div className="bg-zinc-800 text-white min-h-screen mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold text-center mb-6">Providers</h1>

            {/* Add Provider Section */}
            <div className="bg-zinc-900 p-6 rounded-md shadow-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Add New Provider</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="user"
                            placeholder="User ID"
                            value={newProvider.user}
                            onChange={handleChange}
                            className="p-2 rounded-md bg-gray-800 text-white"
                            required
                        />
                        <input
                            type="text"
                            name="experience"
                            placeholder="Experience (years)"
                            value={newProvider.experience}
                            onChange={handleChange}
                            className="p-2 rounded-md bg-gray-800 text-white"
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={newProvider.location}
                            onChange={handleChange}
                            className="p-2 rounded-md bg-gray-800 text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        Add Provider
                    </button>
                </form>
            </div>

            {/* Providers List Section */}
            <div className="bg-zinc-900 p-6 rounded-md shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">All Providers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.isArray(providers) && providers.length > 0 ? (
                        providers.map((provider) => (
                            <div key={provider._id} className="bg-zinc-700 p-4 rounded-md shadow">
                                <h3 className="text-xl font-bold">{`Provider ID: ${provider.user}`}</h3>
                                <p>{`Experience: ${provider.experience} years`}</p>
                                <p>{`Location: ${provider.location}`}</p>
                                <p>{`Ratings: ${provider.ratings}`}</p>
                                <button
                                    onClick={() => handleDelete(provider._id)}
                                    className="mt-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-colors duration-300"
                                >
                                    Delete Provider
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No providers available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Providers;
