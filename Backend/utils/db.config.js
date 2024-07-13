const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log(`Connection Successful. DataBase Connected`);
    })
    .catch((error) => {
      console.log(`Unable to connect with Database. Error : ${error}`);
      process.exit(1);
    });
};

module.exports = { connectDB };
