const db = require("../dbConfig.js");

module.exports = {
  allCategory,
  getCategoryById,
  addCategory,
  editCategory,
  removeCategory,
  allClothing,
  getClothingById,
  addClothing,
  editClothing,
  removeClothing,
};

//Category

//Get all Categories
function allCategory() {
  return db("category");
}

//Get Category by id
function getCategoryById(id) {
  return db("category").where({ id }).first();
}

//Add Category
function addCategory(move) {
  return db("category").insert(move, "id");
}

//Edit Category
function editCategory(id, changes) {
  return db("category")
    .where("id", id)
    .update(changes)
    .then((count) => (count > 0 ? this.getCategoryById(id) : null));
}

//Delete Category
function removeCategory(id) {
  return db("category").where("id", id).del();
}

//Clothing

//Get all Clothing
function allClothing() {
  return db("clothing");
}

//Get Clothing by id
function getClothingById(id) {
  return db("clothing").where({ id }).first();
}

//Add clothing
function addClothing(move) {
  return db("clothing").insert(move, "id");
}

//Edit clothing
function editClothing(id, changes) {
  return db("clothing")
    .where("id", id)
    .update(changes)
    .then((count) => (count > 0 ? this.getClothingById(id) : null));
}

//Delete clothing
function removeClothing(id) {
  return db("clothing").where("id", id).del();
}
