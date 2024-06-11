require("dotenv") .config();
const express = require("express")
const app = express();
const morgan = require("morgan");


// Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    console.log("route handler ran");
    res.status(200).json({
        status: "success",
        data: {
            restaurants: ["Haji", "Mcdonalds", "KFC"]
        },
    });
});

// Get a restaurant
app.get("/api/v1/restaurants/:restaurantsid", (req, res) => {
    console.log(req.params);
});

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "Haji",
        },
    });
});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success",
        data: null,
    });
});


const port = process.env.PORT || 3001
app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});