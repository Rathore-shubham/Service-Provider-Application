import React from 'react';
import { FaCheckCircle, FaClock, FaBan } from 'react-icons/fa'; // Import icons for status

const Bookings = () => {
    const bookingsData = [
        {
            _id: '1',
            service: { name: 'Home Cleaning' },
            date: '2024-11-01T10:00:00Z',
            status: 'Confirmed',
        },
        {
            _id: '2',
            service: { name: 'Plumbing' },
            date: '2024-11-02T13:00:00Z',
            status: 'Pending',
        },
        {
            _id: '3',
            service: { name: 'Electrical Work' },
            date: '2024-11-03T15:00:00Z',
            status: 'Cancelled',
        },
        {
            _id: '4',
            service: { name: 'Gardening' },
            date: '2024-11-04T09:00:00Z',
            status: 'Confirmed',
        },
        {
            _id: '5',
            service: { name: 'Carpentry' },
            date: '2024-11-05T11:00:00Z',
            status: 'Pending',
        },
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Confirmed':
                return <FaCheckCircle className="text-green-500" />;
            case 'Pending':
                return <FaClock className="text-yellow-500" />;
            case 'Cancelled':
                return <FaBan className="text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-zinc-900 text-white min-h-screen mx-auto px-6 py-20 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-8">My Bookings</h1>

            {/* Filter for pending bookings */}
            <h2 className="text-3xl font-semibold mb-4">Pending Bookings</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-zinc-800 border border-gray-200 mb-8 rounded-lg">
                    <thead>
                        <tr className="bg-zinc-700">
                            <th className="py-3 px-6 text-left">Service</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingsData.filter(booking => booking.status === 'Pending').map((booking) => (
                            <tr key={booking._id} className="hover:bg-zinc-600 transition duration-300">
                                <td className="py-3 px-6 border-b">{booking.service.name}</td>
                                <td className="py-3 px-6 border-b">{new Date(booking.date).toLocaleDateString()}</td>
                                <td className="py-3 px-6 border-b flex items-center">{getStatusIcon(booking.status)} {booking.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Filter for confirmed bookings */}
            <h2 className="text-3xl font-semibold mb-4">Confirmed Bookings</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-zinc-800 border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-zinc-700">
                            <th className="py-3 px-6 text-left">Service</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingsData.filter(booking => booking.status === 'Confirmed').map((booking) => (
                            <tr key={booking._id} className="hover:bg-zinc-600 transition duration-300">
                                <td className="py-3 px-6 border-b">{booking.service.name}</td>
                                <td className="py-3 px-6 border-b">{new Date(booking.date).toLocaleDateString()}</td>
                                <td className="py-3 px-6 border-b flex items-center">{getStatusIcon(booking.status)} {booking.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Filter for cancelled bookings */}
            <h2 className="text-3xl font-semibold mb-4">Cancelled Bookings</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-zinc-800 border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-zinc-700">
                            <th className="py-3 px-6 text-left">Service</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingsData.filter(booking => booking.status === 'Cancelled').map((booking) => (
                            <tr key={booking._id} className="hover:bg-zinc-600 transition duration-300">
                                <td className="py-3 px-6 border-b">{booking.service.name}</td>
                                <td className="py-3 px-6 border-b">{new Date(booking.date).toLocaleDateString()}</td>
                                <td className="py-3 px-6 border-b flex items-center">{getStatusIcon(booking.status)} {booking.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
