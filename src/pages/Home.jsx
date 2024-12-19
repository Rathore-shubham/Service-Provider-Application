import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-zinc-900 w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1676311396794-f14881e9daaa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-zinc-900 bg-opacity-60"></div>
        <div className="container mx-auto text-center text-white relative z-10 p-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mt-20">
            Welcome to Service Provider App 
          </h1>
          <p className="mt-6 text-lg md:text-2xl">
            Book professional home services from trusted providers with ease.
          </p>
          <Link to="/services">
            <button className="mt-8 px-8 py-3 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold rounded-md shadow-lg transition duration-300 ease-in-out">
              Explore Services
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto p-8 text-white">
        <h2 className="text-3xl font-bold text-center mt-12">Our Services</h2>
        <p className="text-center mt-4 text-lg mb-12">
          We provide a wide range of services to make your life easier.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-zinc-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="https://plus.unsplash.com/premium_photo-1677234147647-c18eedb7eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWUlMjBjbGVhbmluZ3xlbnwwfDB8MHx8fDA%3D"
              alt="Cleaning"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Home Cleaning</h3>
              <p className="mt-2">
                Professional home cleaning services for a sparkling clean space.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-zinc-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="https://plus.unsplash.com/premium_photo-1663047695260-98cde4d6bbc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGlhbmNlJTIwcmVwYWlyfGVufDB8MHwwfHx8MA%3D%3D"
              alt="Repair"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Appliance Repair</h3>
              <p className="mt-2">
                Expert repair services for your home appliances by skilled
                technicians.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-zinc-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1454988501794-2992f706932e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bWJpbmclMjBzZXJ2aWVzfGVufDB8MHwwfHx8MA%3D%3D"
              alt="Plumbing"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Plumbing Services</h3>
              <p className="mt-2">
                Reliable plumbing services to fix any leaks or installations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
