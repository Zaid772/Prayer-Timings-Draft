require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./connection")
const port = process.env.PORT;

const userRouter = require("./routes/routes")
console.log(port)

const app = express();

app.use(cors());
app.use(express.json());

connection().then(() => {
    app.use(userRouter);
})

app.use("/health", (req,res) => {
    res.status(200).json({message:"API is alive"})
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});