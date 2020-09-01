const db = require("../dbConfig.js");

module.exports={
    allUsers
}


//get all users
function allUsers() {
    return db('users')
       
}