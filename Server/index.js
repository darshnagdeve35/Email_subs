const express = require("express");
const app = express();
const port = 4000;
var cors = require("cors");
const Router = require("./Routes/Router");
require("dotenv").config();
const mongoose = require("mongoose");

const corsOptions = {
  origin: "*",
  Credential: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

try {
  mongoose.connect(process.env.DB_URI);
  console.log("connect success");
} catch (error) {
  console.log(error);
}

app.use("/", Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
