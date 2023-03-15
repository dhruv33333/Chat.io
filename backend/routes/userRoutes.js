const express = require("express");
const router = express.Router();

const User = require("../models/userSchema");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please fill the form correctly!" });
  }

  const userAlreadyExists = await User.findOne({ email: email });
  if (userAlreadyExists) {
    return res.status(400).json({ error: "User already exists!" });
  }

  const user = await User.create({ name, email, password });

  if (user) {
  } else {
    return res.status(500).json({ error: "Failed to register user" });
  }

  res.status(200).json({ message: "User successfully registered!" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please enter all credentials!" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Please enter correct credentials!" });
    }
    if (user.password !== password) {
      return res.status(400).json({ error: "Please enter correct password!" });
    }
    res.status(200).json({ message: "User successfully logged in!" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Unable to login at the moment, please try again" });
  }
});

module.exports = router;
