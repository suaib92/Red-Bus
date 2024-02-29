import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

function BusBookingForm() {
  // Retrieve booking data from local storage
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));

  // Retrieve selected bus data from local storage
  const selectedBus = JSON.parse(localStorage.getItem('selectedBus'));

  // Check if booking data or selected bus data exists
  if (!bookingData || !selectedBus) {
    return <div>No booking data found.</div>;
  }

  // Destructure booking data
  const { selectedSeats, searchDetails, selectedSeatPrices } = bookingData;

  const userData = {
    selectedSeats,
    searchDetails,
    selectedSeatPrices,
  };

  const makePayment = async () => {
    localStorage.setItem('userData', JSON.stringify(userData));
    const stripe = await loadStripe(
      'pk_test_51OmiseSIYOwqfC9mBFcMv3Zi3peKcxFOvtEZQ45sDyJGOqKvtqTXBL3Alhla9tG2viaHfVCIM3ezh4gNsuNu95xH00yHdH2X4o'
    );
    const body = {
      products: selectedSeatPrices,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch('http://localhost:5000/api/create-checkout-session', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
 return (
    <div className="bg-gray-100 p-8 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Booking Details</h2>
          <div className="mb-4">
            <p className="text-green-500 mb-1">
              <span className="font-semibold">From:</span> {`${searchDetails.fromLocation.state} - ${searchDetails.fromLocation.district}`}
            </p>
            <p className="text-green-500 mb-1">
              <span className="font-semibold">To:</span> {`${searchDetails.toLocation.state} - ${searchDetails.toLocation.district}`}
            </p>
            <p className="text-green-500 mb-1">
              <span className="font-semibold">Date:</span> {searchDetails.selectedDate}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Selected Seats & Prices</h3>
            <ul>
              {selectedSeats.map((seat, index) => (
                <li key={seat} className="text-green-500 mb-1">
                  {seat} - ₹{selectedSeatPrices[index]}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Bus Details</h3>
            <p className="text-green-500 mb-1">
              <span className="font-semibold">Bus Name:</span> {selectedBus.name}
            </p>
            <p className="text-green-500 mb-1">
              <span className="font-semibold">Rating:</span> {selectedBus.rating}
            </p>
            <p className="text-green-500 mb-1">
              <span className="font-semibold">Type:</span> {selectedBus.category}
            </p>
            <p className="text-green-500 mb-1">
              <span className="font-semibold">Seats Left:</span> {selectedBus.totalSeats}
            </p>
            <p className="text-green-500 mb-1">
              <span className="font-semibold">Windows Left:</span> {selectedBus.totalWindowSeatsAvailable}
            </p>
          </div>
        </div>
        <div className="bg-gray-200 px-4 py-2 flex justify-center">
          <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded" onClick={makePayment}>
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusBookingForm;
