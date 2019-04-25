const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const db = require("../db");

// Load User model
const User = require("../../models/User");
const Program = require("../../models/Program");
var nome;

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

router.post("/login", (req, res) => {
  var hash = crypto.createHash("sha256");
  var email = req.body.email;
  var pass = req.body.password;
  console.log(req.body);
  db.getResults(req, res, "users", { email: email }, results => {
    // console.log(results);
    if (results.length == 0) {
      return res.status(401).json({ message: "invalid email" });
    } else {
      nome = results[0].firstname;
      pass = pass + results[0].salt;
      hash.update(pass);
      var hashed_value = hash.digest("hex");
      if (true) {
        //hashed_value == results[0].password_hash
        User.findOne({ email: req.body.email }).then(user => {
          console.log("hjbjh");
          // console.log(user)
          return res.status(200).json(user);
        });
      }
    }
  });
});

// router.post("/login", (req, res) => {
//   var hash = crypto.createHash("sha256");
//   var email = req.body.email;
//   var pass = req.body.password;

//   User.findOne({ email }).then(user => {
//     // Check for user
//     if (!user) {
//       //errors.email = 'User not found';
//       return res.status(404).json({ message: "User not found" });
//     } else {
//       pass = pass + user.salt;
//       hash.update(pass);
//       var hashed_value = hash.digest("hex");
//       if (hashed_value === user.hashed_value) {
//         return res.status(200).json({ message: "Logged In" });
//       }
//     }
//   });

// db.getResults(req, res, "user", { email: email }, results => {
//   if (results.length == 0) {
//     return res.status(401).json({ message: "invalid email" });
//   } else {
//     pass = pass + results[0].salt;
//     hash.update(pass);
//     var hashed_value = hash.digest("hex");
//     if (hashed_value == results[0].password_hash) {
//       return res.status(200).json({ message: "Logged IN" });
//     } else {
//       return res.status(401).json({
//         message: "Authentication error. Username/password mismatch"
//       });
//     }
//   }
//});
//});

router.post("/signup", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      var email = req.body.email;
      var password = req.body.password;
      var firstname = req.body.firstname;
      var lastname = req.body.lastname;
      var name = firstname + " " + lastname;
      var user_type = req.body.user_type;
      var hash = crypto.createHash("sha256");
      var salt = generateSalt(128);
      password = password + salt;
      hash.update(password);
      var hashed_value = hash.digest("hex");
      const newUser = new User({
        name,
        email,
        password_hash: hashed_value,
        salt,
        user_type
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});

router.post("/newprog", (req, res) => {
  console.log("Inside post () in users.js");
  var name = req.body.name;
  var description = req.body.description;
  var startTime = req.body.startTime;
  var endTime = req.body.endTime;
  var managers = req.body.managers;
  var venue = req.body.venue;
  var partcap = req.body.partcap;

  const newProg = new Item({
    name,
    description,
    startTime,
    endTime,
    managers,
    venue,
    partcap
  });

  newProg.save().then(program => res.json(program));
  console.log(newProg);
});

router.get("/:auth", (req, res) => {
  console.log("Hello See Here -------------------------");
  console.log(req.params.auth);
  User.findById(req.params.auth).then(results => {
    res.json(results);
  });
});

router.post("/:auth", (req, res) => {
  console.log("server side");
  console.log(req.params.auth);
  // User.findById(req.params.auth)
  // .then(item => {console.log(item)})
  User.findByIdAndUpdate(
    req.params.auth,
    { $set: req.body },
    { new: true }
    // (err, Item) => {
    //   // Handle any possible database errors
    //   if (err) return res.status(517).send(err);
    //   return res.send(Item);
    // }
  ).then(results => {
    res.json(results);
  });
});

function generateSalt(n) {
  var salt = "";
  var sample_space = "abcdefghijklmnopqrstuvwxyz0123456789ABC";
  for (var i = 0; i < n; i++) {
    salt = salt + sample_space[Math.floor(Math.random() * sample_space.length)];
  }
  return salt;
}

module.exports = router;
