
import React from "react";

export default function Filter() {
    return (
      <div className="w-82 flex-col">
        <h3 className="text-gray-700 font-semibold mb-2">Filter</h3>
        <div className="grid grid-rows-4 gap-4">
          <div className="border p-2">
            <h4 className="text-gray-700 font-semibold mb-2">Departure Time</h4>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Morning Session</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Afternoon Session</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Evening Session</label>
            </div>
          </div>
          <div className="border p-2">
            <h4 className="text-gray-700 font-semibold mb-2">Pickup Point</h4>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Kolkata</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Mumbai</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Bangalore</label>
            </div>
          </div>
          <div className="border p-2">
            <h4 className="text-gray-700 font-semibold mb-2">Drop Point</h4>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Mumbai</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Kolkata</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>Bangalore</label>
            </div>
          </div>
          <div className="border p-2">
            <h4 className="text-gray-700 font-semibold mb-2">Bus Rating</h4>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>4 star or more</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>3 star or more</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500 mr-2" />
              <label>2 star or more</label>
            </div>
          </div>
        </div>
        <button className="rounded bg-blue-500 text-white font-bold px-4 py-2 mt-4">Clear All</button>
      </div>
    );
  }