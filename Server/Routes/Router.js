const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");

Router.use(bodyParser.json()); // for parsing application/json
Router.use(bodyParser.urlencoded({ extended: true }));

const userData = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

Router.get("/users", function (req, res) {
  res.send(userData);
});

Router.get("/", (req, res) => {
  res.send("Hello World!");
});

Router.post("/", (req, res) => {
  const { Email, Password } = req.body;
  console.log(req.body.Email + " " + req.body.Password);

  res.json({
    message: "Received POST request",
    email: Email,
    password: Password,
  });
});

module.exports = Router;
