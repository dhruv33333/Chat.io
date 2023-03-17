const jwt = require("jsonwebtoken");

const generateAuthToken = function (id) {
  try {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = generateAuthToken;
