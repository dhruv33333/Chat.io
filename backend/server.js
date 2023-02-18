const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/connectDB");
const app = express();

// setting up env file
dotenv.config();

// connecting to db
connectDB();

// default route, TODO: make a separate route folder
app.get("/", (req, res) => {
  res.send("You are not supposed to be here. Go awayyyy!!!!!");
});

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log("Server started at port 8000");
});
