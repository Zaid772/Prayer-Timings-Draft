const User = require("../models/users");

async function registerUser (req, res) {
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        
        res.status(200).json({
            message: "User successfully registered"
        });
    } catch (error) {
        res.status(501).json({
            message: error.message,
            error: error
        });
    };
};

module.exports = registerUser;