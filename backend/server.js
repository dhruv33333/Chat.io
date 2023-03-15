const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const app = express();
const router = require("./routes");

// setting up env file
dotenv.config();

// connecting to db
connectDB();

app.use(express.json()); // adding middleware, so that our app can understand/read the req json data that we send

app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log("Server started at port 8000");
});
