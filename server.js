const express = require("express");
const connectDB = require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// require("dotenv/config");
app.use(bodyParser.json());
const path = require("path");

app.use("/api/users", require("./routes/register"));
app.use("/api/product", require("./routes/product"));
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(port, console.log(`server running on port ${port}`));
