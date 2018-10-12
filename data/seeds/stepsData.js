
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {name: 'Add butter', orderSteps: 2, recipe_id: 3},
        {name: 'Cook Meat', orderSteps: 1, recipe_id: 3},
        {name: 'Put in tortilla', orderSteps: 3, recipe_id: 3},
      ]);
    });
};
