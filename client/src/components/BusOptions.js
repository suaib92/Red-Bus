import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectSeat, deselectSeat } from '../Actions/BusOptionAction';
import SeatSelection from './SeatSelection';
import Filter from './Filter';
import axios from 'axios';

const BusOptions = ({ selectedSeats, availableSeats, selectSeat, deselectSeat }) => {
  const [showSeats, setShowSeats] = useState(Array(4).fill(false));
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bus_owner');
        setBusData(response.data);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup tasks, if any
    };
  }, []);

  const handleViewSeats = (index, bus) => {
    const updatedShowSeats = [...showSeats];
    updatedShowSeats[index] = !updatedShowSeats[index];
    setShowSeats(updatedShowSeats);

    // Save bus details to local storage
    localStorage.setItem('selectedBus', JSON.stringify(busData[index]));
  };

  return (
    <>
      <div className='flex justify-around mt-2'>
        <Filter />
        <div className="w-8/12 p-4 bg-white rounded-lg shadow-md">
          {busData.map((bus, index) => (
            <div key={index} className="flex justify-between mb-4 p-4">
              <div className="flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{bus.name}</h2>
                  <div className="flex items-center mt-1">
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">{bus.rating}</div>
                    <span className="text-sm text-gray-500 ml-2">ratings</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    <span>{bus.type}</span> | <span>{bus.seatsLeft} Seats Left</span> | <span>{bus.windowsLeft} Window/s left</span>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <span className="font-semibold">{bus.startTime}</span><span className="text-sm text-gray-500 ml-2">{bus.duration}</span>
                  </div>
                  <div>
                    <span className="font-semibold">{bus.endTime}</span>
                  </div>
                </div>
                {showSeats[index] && <SeatSelection availableSeats={availableSeats} selectedSeats={selectedSeats} onSeatSelect={(seatId) => {
                  if (selectedSeats.includes(seatId)) {
                    deselectSeat(seatId);
                  } else {
                    selectSeat(seatId);
                  }
                }} />}
              </div>
              <div className="flex flex-col justify-between items-end max-h-4">
                <div className="text-lg text-gray-800 font-semibold ">Trip Cost</div>
                <div className="text-2xl text-orange-500 font-bold">{bus.cost}</div>
                <div className=" mt-2">
                  <button onClick={() => handleViewSeats(index, bus)} className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 text-xs font-medium bg-green-500 text-white px-2 py-1 rounded">
                    {showSeats[index] ? "Hide Seats" : "View Seats"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedSeats: state.selectedSeats,
  availableSeats: state.availableSeats
});

const mapDispatchToProps = {
  selectSeat,
  deselectSeat
};

export default connect(mapStateToProps, mapDispatchToProps)(BusOptions);
