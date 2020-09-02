const db = require("../dbConfig.js");

module.exports={
    allUsers,
  findUserId,
  editUser,
  removeUser
}


//get all users
function allUsers() {
    return db('users')
       
}

//FIND USER BY ID
function findUserId(id) {
    return db("users")
        .where("id", id)
        .first();
}

//update user
function editUser(id, changes) {
    return db('users')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.findUserId(id) : null));
}


//remove user

function removeUser(id) {
    return db('users')
        .where('id', id)
        .del();
}

