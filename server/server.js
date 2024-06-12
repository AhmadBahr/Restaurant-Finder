require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants");
        console.log(results.rows);
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

// Get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query("SELECT * FROM restaurants WHERE id = $1", [id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: result.rows[0],
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
            [req.body.name , req.body.location, req.body.price_range]
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
            [req.body.name , req.body.location, req.body.price_range, id]
        );
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
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`); 
});
