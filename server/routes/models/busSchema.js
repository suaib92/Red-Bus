const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: String,
  totalSeats: Number,
  totalWindowSeatsAvailable: Number,
  rating: Number,
  amenities: [String]
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;