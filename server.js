const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
let routes = require("./routes");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const db =
  "mongodb+srv://hemraj:hemraj@clusterdev-sndjb.mongodb.net/test?retryWrites=true&w=majority";
const connect = mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
