require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const router = require("./routes/userRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  

// Routes
app.use("/api/user", router);

app.get("/", (req, res) => {
    res.send("App is running");
});

// Connect to DB
db();  

// Start the Server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
