
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  from: String,
  to: String,
  date:String,
  arrival: String,    
  departure: String,
  startRating: Number,
  endRating: Number,
  operators: String,
  // Add other fields as needed
});

const Trips = mongoose.model('Trip', tripSchema);

module.exports = Trips;
