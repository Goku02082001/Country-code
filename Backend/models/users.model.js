const mongoose = require("mongoose");

const usersScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

const Users = mongoose.model("user", usersScheme);

module.exports = { Users };
