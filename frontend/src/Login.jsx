
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // TODO: Replace with actual authentication logic
    if (emailOrPhone && password) {
      onLogin && onLogin(emailOrPhone);
    } else {
      setError('Please enter valid credentials');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-[#1e293b] font-inter">
      {/* Header section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">AgriPredict AI</h1>
          <a href="/" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">Home</a>
        </div>
      </header>

      {/* Main content with centered login form */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Log In</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="login-email-phone" className="block text-sm font-medium text-gray-700">Email Address or Phone Number</label>
              <input
                type="text"
                id="login-email-phone"
                name="email_phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={emailOrPhone}
                onChange={e => setEmailOrPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-green-600 hover:text-green-800">Forgot Password?</a>
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Log In
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

export default Login;
