
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'user@email.com', password: 'password', name: "Test user"},
        
      ]);
    });
};
