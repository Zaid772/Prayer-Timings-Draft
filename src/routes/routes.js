const { Router } = require("express");
const userRouter = Router()
const registerUser = require("../controllers/controllers");
const hashedPassword = require("../middleware/middleware");

userRouter.post("/signin", hashedPassword, registerUser);

module.exports = userRouter;