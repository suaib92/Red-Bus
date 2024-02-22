// BookingDetails.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSelectedSeats } from '../Actions/BookingDetailsAction';

const BookingDetails = ({ selectedSeats, searchDetails, selectedSeatPrices }) => {
  // Save booking data to local storage
  const saveBookingData = () => {
    const bookingData = {
      selectedSeats,
      searchDetails,
      selectedSeatPrices
    };
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  };

  return (
    <div className="border text-card-foreground w-[350px] bg-white p-4 rounded-lg shadow-md" data-v0-t="card">
      <div className="flex flex-col space-y-1.5 p-6 pb-0 pt-0">
        <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">Boarding & Dropping</h3>
        <div>
          <p>From: {`${searchDetails.fromLocation.state} - ${searchDetails.fromLocation.district}`}</p>
          <p>To: {`${searchDetails.toLocation.state} - ${searchDetails.toLocation.district}`}</p>
          <p>Date: {searchDetails.selectedDate}</p>
        </div>
      </div>
      <div className="p-6">
        <div className=" mt-0 pb-0 pt-0">
          <div className="pt-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Selected Seats</span>
              <div className="text-sm font-medium text-gray-700">
                {selectedSeats && selectedSeats.length > 0 ? (
                  <ul>
                    {selectedSeats.map((seat, index) => (
                      <li key={seat}>{seat} - ₹{selectedSeatPrices[index]}</li>
                    ))}
                  </ul>
                ) : "No seats selected"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center p-6 mt-4 pt-4 border-t border-gray-200">
        <Link
          to="/bus-booking-form"
          onClick={saveBookingData} // Save booking data before navigating
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full bg-orange-600 text-white py-3 rounded-md">Proceed To Book</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedSeats: state.seatSelection.selectedSeats,
    searchDetails: state.search
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedSeats: (seats) => dispatch(updateSelectedSeats(seats))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetails);
