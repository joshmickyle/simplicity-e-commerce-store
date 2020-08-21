const express = require("express");
const connectDB = require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// require("dotenv/config");
app.use(bodyParser.json());
const path = require("path");

// const RegisterRoute = require("./routes/register");

app.use("/api/users", require("./routes/register"));
// app.get("/", (req, res) => {
//   res.send("route working");
// });

// connect to db
// mongoose.connect(
//   process.env.DB_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//   () => console.log("database connected")
// );
connectDB();

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running on port ${port}`));
