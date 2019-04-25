const express = require("express");
const router = express.Router();

//Item model
const Todo = require("../../models/Item");

//GET request api/items
// GET all items
router.get("/:prog_name", (req, res) => {
  Todo.findById(req.params.prog_name)
    .then(items => res.json(items))
    .catch(err => res.status(401).send(err));
});

//post request api/items
//post all items
router.post("/:prog_name", (req, res) => {
  console.log(req.body);
  console.log(req.body.announcements);
  const meow = {};
  (meow.type = req.params.prog_name), (meow.description = req.body.description);
  // Todo.findAll({name:meow.name})
  Todo.findByIdAndUpdate(
    req.params.prog_name,
    { $set: req.body },
    { new: true },
    (err, Item) => {
      // Handle any possible database errors
      if (err) return res.status(517).send(err);
      return res.send(Item);
    }
  );
});

module.exports = router;
