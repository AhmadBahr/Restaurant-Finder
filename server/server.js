require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Get all Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    } catch (err) {
        console.error('Error retrieving all restaurants:', err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get a restaurant by ID
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await db.query("SELECT * FROM restaurants WHERE id = $1", [id]);
        if (restaurant.rows.length === 0) {
            return res.status(404).json({ error: "Restaurant not found" });
        }
        const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1", [id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows,
            },
        });
    } catch (err) {
        console.error('Error retrieving restaurant:', err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const { name, location, price_range } = req.body;
        const result = await db.query(
            "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
            [name, location, price_range]
        );
        res.status(201).json({
            status: "success",
            data: {
                restaurant: result.rows[0],
            },
        });
    } catch (err) {
        console.error('Error creating restaurant:', err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location, price_range } = req.body;
        const result = await db.query(
            "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
            [name, location, price_range, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Restaurant not found" });
        }
        res.status(200).json({
            status: "success",
            data: {
                restaurant: result.rows[0],
            },
        });
    } catch (err) {
        console.error('Error updating restaurant:', err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query("DELETE FROM restaurants WHERE id = $1", [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Restaurant not found" });
        }
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.error('Error deleting restaurant:', err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Add a review to a restaurant
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, review, rating } = req.body;
        const newReview = await db.query(
            "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *",
            [id, name, review, rating]
        );
        res.status(201).json({
            status: "success",
            data: {
                review: newReview.rows[0],
            },
        });
    } catch (err) {
        console.error('Error adding review:', err);
        res.status(500).json({ error: "Internal server error" });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
