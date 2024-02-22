// routes/busowner.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// GET route to fetch data based on state or district
router.get('/bus_owner', async (req, res) => {
    try {
        // Retrieve data from MongoDB
        const data = await mongoose.connection.db.collection('bus_owner').find().toArray();
        
        // Send the data as a response
        res.json(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from MongoDB', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;