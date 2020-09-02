const router = require("express").Router();

const User = require("../models/user-models.js");

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

//  (PUT update USER)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { body } = req;

  User
  .editUser(id, body)

    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log("error", err);
      res
        .status(500)
        .json({
          error: "There was an error while updating the user to the database",
        });
    });
});

//Delete user

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    User
    .removeUser(id)

        .then(user => {
            

            res.status(200).json({ message: 'Deleted user' });
        })
        .catch(err => {
            console.log('error', err);
            res.status(404).json({ error: "The user could not be removed" })
        })
})


//get user by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    User
    .findUserId(id)
  
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res
            .status(201)
            .json({ err: `No user with the id of ${id} exists` });
        }
      })
      .catch((err) => {
        res.status(500).json({ err: "failed to get takedown" });
      });
  });

  module.exports=router;