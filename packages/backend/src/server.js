const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.log(`Database Error: ${error}`));
db.once("open", () => console.log("Connected to the Database"));

const exampleRoute = require("./routes/example");
app.use("/api/example", exampleRoute);

app.listen(PORT, () => console.log(`Server Started on Port ` + PORT));
