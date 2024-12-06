const { Router } = require("express");
const userRouter = Router();
const registerUser = require("../controllers/controllers");
const hashPassword = require("../middleware/middleware");

userRouter.post("/signin", hashPassword, registerUser);

module.exports = userRouter;