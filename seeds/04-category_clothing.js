
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category_clothing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('category_clothing').insert([
        {category_id: '2', clothing_id: '1'},
        
      ]);
    });
};
