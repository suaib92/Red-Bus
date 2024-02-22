import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BusBookingForm() {
  const [bookingData, setBookingData] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve booking data from local storage
    const bookingDataFromLocalStorage = JSON.parse(localStorage.getItem('bookingData'));
    setBookingData(bookingDataFromLocalStorage);

    // Retrieve selected bus data from local storage
    const selectedBusFromLocalStorage = JSON.parse(localStorage.getItem('selectedBus'));
    setSelectedBus(selectedBusFromLocalStorage);
  }, []);

  const postDataToBackend = async () => {
    try {
      // Make sure both booking data and selected bus data exist
      if (!bookingData || !selectedBus) {
        throw new Error('Booking data or selected bus data not found.');
      }

      // Your backend API endpoint for posting trips
      const apiUrl = 'http://localhost:5000/api/trips'; // Assuming your backend server is running locally on port 5000
      
      // Construct the data object to send to the backend
      const dataToSend = {
        from: `${searchDetails.fromLocation.state} - ${searchDetails.fromLocation.district}`,
        to: `${searchDetails.toLocation.state} - ${searchDetails.toLocation.district}`,
        date: searchDetails.selectedDate,
        departure: selectedBus.departureTime,
        startRating: selectedBus.rating,
        endRating: 5, // Assuming endRating is a fixed value or you have a specific logic for it
        operators: selectedBus.name,
        // Add other fields as needed
      };

      // Make a POST request to your backend API
      const response = await axios.post(apiUrl, dataToSend);

      // Handle success response
      console.log('Data successfully posted to the backend:', response.data);
      
      // Optionally, you can clear the local storage after successful submission
      localStorage.removeItem('bookingData');
      localStorage.removeItem('selectedBus');

    } catch (error) {
      // Handle errors
      setError(error.message);
      console.error('Error posting data to the backend:', error);
    }
  };

  if (error) {
    return <div className="bg-red-100 text-red-800 p-4">{error}</div>;
  }

  if (!bookingData || !selectedBus) {
    return <div className="bg-gray-100 text-gray-800 p-4">No booking data found.</div>;
  }

  // Destructure booking data
  const { selectedSeats, searchDetails, selectedSeatPrices } = bookingData;

  return (
    <div className="bg-gray-100 p-8">
      {/* Render the booking details using the retrieved data */}
      <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Boarding & Dropping</h3>
        <p>From: {`${searchDetails.fromLocation.state} - ${searchDetails.fromLocation.district}`}</p>
        <p>To: {`${searchDetails.toLocation.state} - ${searchDetails.toLocation.district}`}</p>
        <p>Date: {searchDetails.selectedDate}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Selected Seats</h3>
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={seat}>{seat} - ₹{selectedSeatPrices[index]}</li>
          ))}
        </ul>
      </div>

      {/* Render the selected bus details */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Selected Bus Details</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Bus Name: {selectedBus.name}</h3>
        <p>Rating: {selectedBus.rating}</p>
        <p>Type: {selectedBus.category}</p>
        <p>Seats Left: {selectedBus.totalSeats}</p>
        <p>Windows Left: {selectedBus.totalWindowSeatsAvailable}</p>
        
        {/* Render amenities if available */}
        {selectedBus.amenities && selectedBus.amenities.length > 0 && (
          <div>
            <h4>Amenities:</h4>
            <ul>
              {selectedBus.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Button to post data to backend */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={postDataToBackend}>Submit</button>
    </div>
  );
}

export default BusBookingForm;
