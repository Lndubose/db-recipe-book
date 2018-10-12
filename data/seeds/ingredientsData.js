
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'salt'},
        {name: 'flour'},
        {name: 'butter'},
        {name: 'meat'},
        {name: 'cheese'}
      ]);
    });
};
