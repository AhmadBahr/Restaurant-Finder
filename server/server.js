require("dotenv") .config();

const express = require("express")

const app = express()

const port = process.env.PORT || 3001
app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});