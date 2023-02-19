const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ details: req.body });
});

module.exports = router;
