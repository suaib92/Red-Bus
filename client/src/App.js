import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import HomePage from './components/Homepage';
import BusOptions from './components/BusOptions';
import BusBookingForm from './components/BusBookingForm'; // Import the BusBookingForm component
import Navbar from './components/Nevbar';
import "./App.css"
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar  /> {/* Render the Navbar component */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/busoptions" element={<BusOptions />} />
        {/* Ensure the path matches exactly */}
        <Route path="/bus-booking-form" element={<BusBookingForm />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
