const User = require("../models/userschema");

const createuser = async (req, res) => {  
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user1 = await User.create({ name, email, password });
        res.status(201).json(user1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createuser };
