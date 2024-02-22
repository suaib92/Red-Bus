const mongoose = require('mongoose');

const stateDistrictSchema = new mongoose.Schema({
    
       
        "state": "string",
        "districts": [
          {
            "name": "string"
          }
        ]
      
});

const StateDistrict = mongoose.model('StateDistrict', stateDistrictSchema);

module.exports = StateDistrict;
