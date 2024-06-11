require("dotenv") .config();

const express = require("express")

const app = express();

app.get("/getRestaurants", (req, res) => {
    res.json([
        {
            name: "Wendy's",
            location: "New York"
        },
        {
            name: "McDonald's",
            location: "Los Angeles"
        }
    ])
});

const port = process.env.PORT || 3001
app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});