const router = require("express").Router();

const User = require("./user-models.js");

//get all users
router.get("/",  (req, res) => {
  User
  .allUsers()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get users" });
    });
});

module.exports=router;