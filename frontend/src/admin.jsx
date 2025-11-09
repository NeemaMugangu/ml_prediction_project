import React, { useState } from 'react';

const initialFarmers = [
  { id: 1, name: 'John Doe', location: 'Nairobi', phone: '0712345678', email: 'john@example.com', listings: 5 },
  { id: 2, name: 'Jane Smith', location: 'Eldoret', phone: '0723456789', email: 'jane@example.com', listings: 3 },
];
const initialBuyers = [
  { id: 1, name: 'Alice Johnson', location: 'Mombasa', phone: '0734567890', email: 'alice@example.com', orders: 2 },
  { id: 2, name: 'Bob Williams', location: 'Kisumu', phone: '0745678901', email: 'bob@example.com', orders: 1 },
];

const Admin = () => {
  const [farmers] = useState(initialFarmers);
  const [buyers] = useState(initialBuyers);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-[#1e293b] font-inter">
      {/* Header section */}
      <header className="bg-yellow-400 py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">AgriPredict AI</h1>
          <span className="font-semibold text-gray-700">Admin Dashboard</span>
          <a href="/" className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors duration-200">Log Out</a>
        </div>
      </header>
      <main className="flex-grow flex justify-center items-start">
        <div className="content-overlay bg-white bg-opacity-90 flex-grow p-8 rounded-2xl m-4 max-w-5xl w-full shadow-xl">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-10">Welcome, Admin!</h2>
          {/* Farmers Table */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Registered Farmers</h3>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listings</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {farmers.map(farmer => (
                    <tr key={farmer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{farmer.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{farmer.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{farmer.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{farmer.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{farmer.listings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* Buyers Table */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Registered Buyers</h3>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {buyers.map(buyer => (
                    <tr key={buyer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{buyer.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{buyer.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{buyer.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{buyer.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{buyer.orders}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; 2025 AgriPredict AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Admin;
