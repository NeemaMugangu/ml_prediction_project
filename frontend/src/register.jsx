import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({
    full_name: '',
    phone_number: '',
    email_address: '',
    location: '',
    user_type: 'farmer',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirm_password) {
      setError('Passwords do not match');
      return;
    }
    // TODO: Add further validation and registration logic
    onRegister && onRegister(form);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-[#1e293b] font-inter">
      {/* Header section for the registration page */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">AgriPredict AI</h1>
          <a href="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">Home</a>
        </div>
      </header>

      {/* Main content with a centered registration form */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register</h2>
          <form id="register-form" className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="full_name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={form.full_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                name="phone_number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={form.phone_number}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Gmail</label>
              <input
                type="email"
                id="email-address"
                name="email_address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={form.email_address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="user-type" className="block text-sm font-medium text-gray-700">Register as</label>
              <select
                id="user-type"
                name="user_type"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={form.user_type}
                onChange={handleChange}
                required
              >
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="register-password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm_password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={form.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Register
            </button>
          </form>
        </div>
      </main>

      {/* Footer section */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 AgriPredict AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
