exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('clothing')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('clothing').insert([
        {
          name: 'Striped Sweater',
          description: 'Blue and white striped sweater',
          image_url:
            'https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_960_720.jpg',
            type:'top',
            user_id: 1,
            category_id: 2
        },
      ]);
    });
};
