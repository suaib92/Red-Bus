// SearchBar.js

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFromLocation, setToLocation, setSelectedDate } from '../Actions/SearchAction';

const SearchBar = () => {
  const dispatch = useDispatch();

  const [statesAndDistricts, setStatesAndDistricts] = useState([]);
  const [fromLocation, updateFromLocation] = useState({ state: '', district: '' }); // Renamed
  const [toLocation, updateToLocation] = useState({ state: '', district: '' }); // Renamed
  const [selectedDate, updateSelectedDate] = useState(''); // Renamed

  useEffect(() => {
    fetchStatesAndDistrictsFromBackend();
  }, []);

  const fetchStatesAndDistrictsFromBackend = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/state_district');
      const data = await response.json();
      setStatesAndDistricts(data);
    } catch (error) {
      console.error('Error fetching states and districts:', error);
    }
  };

  const handleLocationChange = (event, setLocation) => {
    const { value } = event.target;
    const [state, district] = value.split(',');
    setLocation({ state, district });
  };

  const handleDateChange = (event) => {
    updateSelectedDate(event.target.value); // Renamed
  };

  const handleSubmit = () => {
    dispatch(setFromLocation(fromLocation));
    dispatch(setToLocation(toLocation));
    dispatch(setSelectedDate(selectedDate));
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(/layered.png)`, backgroundSize: 'cover' }}>
      <div className="bg-slate-300 bg-opacity-40 p-8 rounded-lg shadow-lg bg-cover bg-no-repeat bg " >
        <div className="mb-4">
          <label className="block mb-2">From Location:</label>
          <select
            value={`${fromLocation.state},${fromLocation.district}`}
            onChange={(event) => handleLocationChange(event, updateFromLocation)} // Renamed
            className="border p-2 rounded-md w-full"
          >
            <option value="">Select Location</option>
            {statesAndDistricts.map(({ state, districts }) => (
              districts.map((district) => (
                <option key={`${state}-${district}`} value={`${state},${district}`}>
                  {state} - {district}
                </option>
              ))
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">To Location:</label>
          <select
            value={`${toLocation.state},${toLocation.district}`}
            onChange={(event) => handleLocationChange(event, updateToLocation)} // Renamed
            className="border p-2 rounded-md w-full"
          >
            <option value="">Select Location</option>
            {statesAndDistricts.map(({ state, districts }) => (
              districts.map((district) => (
                <option key={`${state}-${district}`} value={`${state},${district}`}>
                  {state} - {district}
                </option>
              ))
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <Link to="/BusOptions">
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
