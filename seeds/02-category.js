exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('category')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {
          name: 'Beach',
          description: 'Beach clothing',
          image_url:
            'https://cdn.pixabay.com/photo/2016/04/18/22/05/sea-1337565_960_720.jpg',
            user_id: 1
        },
        {
          name: 'Mountains',
          description: 'Mountain clothing',
          image_url:
            'https://cdn.pixabay.com/photo/2017/03/02/20/08/sedona-2112262_960_720.jpg',
            user_id: 1
        },
      ]);
    });
};
