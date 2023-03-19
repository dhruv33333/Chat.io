const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware");
const {
  accessChat,
  fetchchats,
  createGroupChat,
  renameGroupChat,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

router.post("/", protect, accessChat);
router.get("/", protect, fetchchats);
router.post("/create-group", protect, createGroupChat);
router.put("/rename-group", protect, renameGroupChat);
router.put("/groupremove", protect, removeFromGroup);
router.put("/groupadd", protect, addToGroup);

module.exports = router;
