import React, { useState } from 'react';
// The entire application is contained in the App component as required for single-file React projects.

const Register = () => {
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
  // State to track successful registration for displaying a thank you message
  const [isRegistered, setIsRegistered] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (form.password !== form.confirm_password) {
      setError('Passwords do not match');
      return;
    }
    
    if (form.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
    }

    // --- Start of simulated registration logic ---
    console.log('Registration Data:', form);

    // Simulate successful registration
    setIsRegistered(true);
    
    // Clear form after successful submission
    setForm({
      full_name: '',
      phone_number: '',
      email_address: '',
      location: '',
      user_type: 'farmer',
      password: '',
      confirm_password: '',
    });
    // --- End of simulated registration logic ---
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-[#1e293b] font-inter">
      {/* Header section for the registration page */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">AgriPredict AI</h1>
          <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">Home</a>
        </div>
      </header>

      {/* Main content with a centered registration form */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg mx-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register</h2>
          
          {/* Conditional rendering for success message */}
          {isRegistered ? (
              <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="mt-4 text-xl font-semibold text-green-700">Registration Successful!</h3>
                  <p className="mt-2 text-gray-600">You have been registered. Thank you for joining AgriPredict AI!</p>
                  <button 
                    onClick={() => setIsRegistered(false)} 
                    className="mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                      Register Another Account
                  </button>
              </div>
          ) : (
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
                required
              />
              </div>
              {/* Enhanced error message display */}
              {error && <div className="text-red-600 text-sm p-2 bg-red-100 border border-red-300 rounded-md">{error}</div>}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                Register
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer section */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 AgriPredict AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;