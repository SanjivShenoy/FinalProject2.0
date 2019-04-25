const express = require("express");
const router = express.Router();

//Program Model
const Program = require("../../models/Program");

const Todo = require("../../models/Item");
//User Model
const User = require("../../models/User");

// @route GET api/programs
// @desc GET all programs
// @access Public

router.get("/", (req, res) => {
  Todo.find().then(items => res.json(items));
});

router.get("/admin", (req, res) => {
  User.find().then(results => res.json(results));
  // .catch(err => res.status(401).send(err));
});

// @route GET api/programs/subscribed/:user
// @desc GET all programs
// @access Public

router.get("/subscribed/:agb", (req, res) => {
  console.log(req.params.agb);
  User.findOne({ _id: req.params.agb }).then(programs => res.json(programs));
});

module.exports = router;
