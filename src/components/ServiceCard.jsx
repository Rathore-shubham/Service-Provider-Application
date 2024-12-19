import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-zinc-900 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-white mb-4">{service.description}</p>
            <p className="text-lg font-bold">${service.price}/hour</p>
            <p className="text-sm text-gray-400">Category: {service.category.name}</p>
            <p className="text-sm text-gray-400">Provider: {service.provider.name}</p>
            <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-500 transition-colors duration-300">
                Book Now
            </button>
        </div>
    );
};

export default ServiceCard;
