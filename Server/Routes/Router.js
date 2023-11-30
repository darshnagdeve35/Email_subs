const express = require("express");
const Router = express.Router();

Router.get("/users", function (req, res) {
  const userData = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  res.send(userData);
});

module.exports = Router;
