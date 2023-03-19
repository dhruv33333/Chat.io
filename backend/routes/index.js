const express = require("express");
const router = express.Router();

const userRouter = require("./userRoutes");
const chatRouter = require("./chatRoutes");

router.get("/", (req, res) => {
  res.send("You are not supposed to be here. Go awayyyy!!!!!");
});

router.use("/user", userRouter);
router.use("/chat", chatRouter);

module.exports = router;
