const express = require("express");
const router = express.Router();

const userRouter = require("./userRoutes");

router.get("/", (req, res) => {
  res.send("You are not supposed to be here. Go awayyyy!!!!!");
});

router.use("/user", userRouter);

module.exports = router;
