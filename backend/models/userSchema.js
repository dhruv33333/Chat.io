const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.Model("User", userSchema);
module.exports = User;
