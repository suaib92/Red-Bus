import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-poppins" style={{ backgroundImage: "url('/layered.png')", backgroundSize: "cover", backgroundPosition: "center"  }}>
      <div className=" p-8 rounded-lg shadow-lg tespirent"   >
        <h1 className="text-4xl font-extrabold text-center text-white mb-6">Welcome to Red-Bus</h1>
        <p className="text-lg text-center  text-white  mb-8">Find and book your bus tickets with ease.</p>
        <Link to="/Homepage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline">
            Go to Next Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
