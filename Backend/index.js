require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { connectDB } = require("./utils/db.config");
const { usersRoute } = require("./routes/users.routes");


const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Server Home Page" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.use("/users", usersRoute);


app.listen(PORT, async () => {
  await connectDB();
  console.log(`server is running at http://localhost:${PORT}`);
});
