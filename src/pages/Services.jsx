import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard'; // Adjust the path as needed
import dummyServices from '../api/services'; // Adjust the path as needed

const Services = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        provider: '',
    });
    const [editingService, setEditingService] = useState(null);
    const [filter, setFilter] = useState('');

    // Load dummy services
    useEffect(() => {
        setServices(dummyServices);
    }, []);

    // Handle input changes for the new service form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewService((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle adding/editing a service
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingService) {
            // Update existing service
            setServices((prev) =>
                prev.map((service) =>
                    service._id === editingService._id ? { ...editingService, ...newService } : service
                )
            );
            setEditingService(null); // Clear editing state
        } else {
            // Create a new service object
            const addedService = {
                _id: (services.length + 1).toString(), // Generate a new ID
                ...newService,
                price: Number(newService.price), // Ensure price is a number
            };
            // Update the services state
            setServices((prev) => [...prev, addedService]);
        }

        // Reset the form
        setNewService({
            name: '',
            description: '',
            price: '',
            category: '',
            provider: '',
        });
    };

    // Handle editing a service
    const handleEdit = (service) => {
        setNewService(service);
        setEditingService(service);
    };

    // Handle deleting a service
    const handleDelete = (id) => {
        setServices((prev) => prev.filter((service) => service._id !== id));
    };

    // Handle filtering services
    const filteredServices = services.filter((service) =>
        service.category.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="bg-zinc-900 text-white min-h-screen mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>

            {/* Add Service Section */}
            <div className="mb-10 p-6 border border-blue-500 rounded-md bg-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Add New Service</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Service Name"
                            value={newService.name}
                            onChange={handleChange}
                            className="p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={newService.description}
                            onChange={handleChange}
                            className="p-2 rounded-md"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={newService.price}
                            onChange={handleChange}
                            className="p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={newService.category}
                            onChange={handleChange}
                            className="p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            name="provider"
                            placeholder="Provider"
                            value={newService.provider}
                            onChange={handleChange}
                            className="p-2 rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        {editingService ? 'Update Service' : 'Add Service'}
                    </button>
                </form>
            </div>

            {/* Filter Input */}
            <input
                type="text"
                placeholder="Filter by category..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-6 p-2 rounded-md w-full"
            />

            {/* All Services Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Available Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service) => (
                            <div key={service._id} className="bg-zinc-800 p-4 rounded-md">
                                <ServiceCard service={service} />
                                <div className="flex justify-between mt-2">
                                    <button
                                        onClick={() => handleEdit(service)}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service._id)}
                                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No services available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
