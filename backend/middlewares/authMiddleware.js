const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // splitting the token with the word "Bearer" the token before looks like "Bearer <token>"
      token = req.headers.authorization.split(" ")[1];

      // decodes token id
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      // selecting the user by id and removing password from it
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      console.log("Not authorized, token failed");
      res.json({ error: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401);
    console.log("Not authorized, no token");
    res.json({ error: "Not authorized, no token" });
  }
};

module.exports = { protect };
