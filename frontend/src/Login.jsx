import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email_phone: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.email_phone || !form.password) {
      setError('Please fill in all fields');
      return;
    }
    // Simulate login
    console.log('Login Data:', form);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-[#1e293b] font-inter">
      {/* Header section for the login page */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">AgriPredict AI</h1>
          <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">Home</Link>
        </div>
      </header>

      {/* Main content with a centered login form */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Log In</h2>
          <form id="login-form" className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="login-email-phone" className="block text-sm font-medium text-gray-700">Email Address or Phone Number</label>
              <input type="text" id="login-email-phone" name="email_phone" value={form.email_phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="login-password" name="password" value={form.password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-green-600 hover:text-green-800">Forgot Password?</a>
            </div>
            {error && <div className="text-red-600 text-sm text-center py-2">{error}</div>}
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Log In</button>
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
}

export default Login;

