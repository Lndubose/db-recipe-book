
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Granny\'s', dishes_id: 1 },
        {name: 'Paul\'s', dishes_id: 1 },
        {name: 'Fishie', dishes_id: 2 }
      ]);
    });
};
