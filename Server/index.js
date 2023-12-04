const express = require("express");
const app = express();
const port = 4000;
var cors = require("cors");
const Router = require("./Routes/Router");

const corsOptions = {
  origin: "*",
  Credential: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
