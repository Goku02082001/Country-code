const express = require("express");
const {
  validateLogin,
  validateRegister,
} = require("../middleware/users.middleware");
const {
  userLogin,
  userRegister,
  logoutUser,
} = require("../controller/users.controller");

const usersRoute = express.Router();

usersRoute.post("/login", validateLogin, userLogin);

usersRoute.post("/register", validateRegister, userRegister);

usersRoute.post("/logout", logoutUser);

usersRoute.all("*", (req, res) => {
  return res.status(404).json({ message: "404 Invalid Route" });
});

module.exports = { usersRoute };
