import React, { useState } from 'react';

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    // Perform login logic here...
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    setLoggedInUser(user);
    setShowLogin(false);
    setShowRegister(false); // Close register form if open
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
  };

  const handleRegister = () => {
    // Perform registration logic here...
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    setLoggedInUser(user);
    setShowLogin(false); // Close login form if open
    setShowRegister(false);
  };

  return (
    <nav className=" transparent py-2 px-6 flex flex-col md:flex-row md:justify-between items-center ">
      <div className="flex items-center space-x-8 mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 text-[#bd1e59]"
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" x2="4" y1="22" y2="15"></line>
        </svg>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Ticket
        </a>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Contact us
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {loggedInUser ? (
          <div className="text-white bg-green-500 px-4 py-2 rounded-lg flex items-center">
            Welcome, {loggedInUser.username}!
            <button onClick={handleLogout} className="ml-4 bg-white text-green-500 px-2 py-1 rounded-md">Logout</button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <button onClick={() => setShowLogin(!showLogin)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
            <button onClick={() => setShowRegister(!showRegister)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Register</button>
          </div>
        )}
      </div>
      {showLogin && !showRegister && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-2 px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2 px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
          </div>
        </div>
      )}
      {showRegister && !showLogin && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-2 px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2 px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
