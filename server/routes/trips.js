const express = require('express')

const router = express.Router()
const Trips = require('./models/trips schema')



router.post("/trips",async(req, res)=>{
    try {
        const data = req.body;
        console.log(data)
        const resp = await Trips.create(data)
        
        return res.status(200).json(resp)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get("/trips", async (req, res) => {
    try {
        const { from, to, date, arrival, departure, startRating, endRating, operators } = req.query;
        console.log({from})
        console.log({to})
        console.log({date})
        let query = {};

        // Handle 'from' and 'to' parameters
        if (from) {
            query.from = from;
        }
        if (to) {
            query.to = to;
        }

        // Handle 'date' parameter
        if (date) {
            query.date = date;
        }

        // Handle 'arrival' and 'departure' parameters
        if (arrival) {
            query.arrival = arrival;
        }
        if (departure) {
            query.departure = departure;
        }

        // Handle 'startRating' and 'endRating' parameters
        if (startRating !== undefined && endRating !== undefined) {
            query.rating = { $gte: startRating, $lte: endRating };
        } else if (startRating !== undefined) {
            query.rating = { $gte: startRating };
        } else if (endRating !== undefined) {
            query.rating = { $lte: endRating };
        }

        // Handle 'operators' parameter
        if (operators) {
            query.operators = operators;
        }

        const resp = await Trips.find(query).limit(50);
        return res.status(200).json({ resp });
    } catch (error) {
        return res.status(500).send(error);
    }
});



module.exports = router;