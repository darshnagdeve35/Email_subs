const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
Router.use(bodyParser.json()); // for parsing application/json
Router.use(bodyParser.urlencoded({ extended: true }));
const UserModel = require("../Models/Schema");

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

Router.post("/", async (req, res) => {
  const { Email, Password } = req.body;
  console.log(req.body.Email + " " + req.body.Password);

  try {
    const NewUser = new UserModel({ Email: Email, Password: Password });
    const SaveUser = await NewUser.save();
    if (SaveUser) {
      console.log("data saved success");
    }
  } catch (error) {
    console.error(error);
  }

  try {
    res.json({
      email: Email,
      password: Password,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = Router;
