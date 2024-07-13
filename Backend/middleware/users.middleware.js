const jwt = require("jsonwebtoken");
const { Users } = require("../models/users.model");

const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    next();
  } else {
    return res.status(400).json({
      error: true,
      message:
        "Some fields are missing. [name, email, password] all are required",
    });
  }
};
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    next();
  } else {
    return res.status(400).json({
      error: true,
      message: "Some fields are missing. [email, password] all are required",
    });
  }
};

const authenticateUser = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] == "Bearer"
  ) {
    const accessToken = req.headers.authorization.split(" ")[1];

    try {
      var decodedData = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      );

      if (decodedData) {
        const { userId } = decodedData;

        const user = await Users.findById(userId);

        if (user) {
          req.userId = userId;
          req.email = user.email;
          req.name = user.name;
          next();
        } else {
          return res.status(400).json({
            error: true,
            message: "Invalid Access Token. User does not exist",
          });
        }
      } else {
        return res
          .status(400)
          .json({ error: true, message: "Invalid Access Token" });
      }
    } catch (err) {
      res.status(401).json({ error: true, message: err.message });
    }
  } else {
    return res
      .status(400)
      .json({ error: true, message: "Access Token Required. Please Login..." });
  }
};

module.exports = {
  validateRegister,
  validateLogin,
  authenticateUser,
};
