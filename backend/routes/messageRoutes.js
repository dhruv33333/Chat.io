const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");

router.post("/", protect, sendMessage);
router.get("/:chatId", protect, allMessages);

module.exports = router;
