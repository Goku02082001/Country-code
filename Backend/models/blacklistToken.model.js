const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const BlacklistToken = mongoose.model("blacklistedToken", blacklistTokenSchema);

module.exports = { BlacklistToken };
