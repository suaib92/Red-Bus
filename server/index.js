const express = require("express");
const connector = require("./connector");
const cors = require('cors');

const app = express();
connector();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
   res.send("App is live now");
});

// Importing route files
const busOwnerRouter = require("./routes/busowner");
const stateDistrictRouter = require("./routes/state");
const tripsRouter = require("./routes/trips"); // Import the trips router

// Using the route files
app.use("/api", busOwnerRouter);
app.use("/api", stateDistrictRouter);
app.use("/api", tripsRouter); // Use the trips router for handling POST requests to /api/trips

app.listen(5000, () => {
    console.log("listening on port 5000");
});
