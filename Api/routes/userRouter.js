require("dotenv").config();
const express = require("express"); 
const { createuser } = require("../controllers/userContoller");

const router = express.Router(); 

// Test route to check if the API is working
router.get("/", (req, res) => {
    res.status(200).json({ message: "User API is working!" });
});

router.post("/", createuser);  // Create a new user

module.exports = router;
