const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

const {
  loginController,
  registerController,
  searchUserController,
} = require("../controllers/userControllers");

router.get("/get-users", protect, searchUserController);
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
