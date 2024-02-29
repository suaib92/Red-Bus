import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Receipt() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const { selectedSeats, searchDetails, selectedSeatPrices } = userData;

  return (
    <>
      <div className='col text-center border rounded p-4'>
        <FontAwesomeIcon
          icon={faCheck}
          className='p-2'
          style={{
            height: '50px',
            width: '50px',
            color: 'green',
            border: '4px solid green',
            borderRadius: '100%'
          }}
        />
        <h1 className="text-3xl font-bold mb-4">Booking has been confirmed</h1>
        <p className="mb-2">Ticket Id: s67515</p>
        <p className="mb-2">Payment ID: s67515</p>
        <p className="mb-2">From Location: {searchDetails.fromLocation.district}</p>
        <p className="mb-2">To Location: {searchDetails.toLocation.district}</p>
        <p className="mb-2">Seat details:  {selectedSeats[0]}</p>
        <p className="mb-2">Price Details: {selectedSeatPrices[0]}</p>
      </div>
    </>
  );
}

export default Receipt;