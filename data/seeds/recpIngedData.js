
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recToIngred')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recToIngred').insert([
        {recipe_id: 1, ingredients_id: 1, quantity: 1, units: 'tbs'},
        {recipe_id: 1, ingredients_id: 2, quantity: 1.4, units: 'cup'},
        {recipe_id: 1, ingredients_id: 3, quantity: 5.6, units: 'gram'},
        {recipe_id: 1, ingredients_id: 5, quantity: 1.4, units: 'cup'},
        {recipe_id: 2, ingredients_id: 2, quantity: 5.6, units: 'cup'},
        {recipe_id: 2, ingredients_id: 4, quantity: 1.4, units: 'pound'},
        {recipe_id: 2, ingredients_id: 5, quantity: 5.6, units: 'cup'}
      ]);
    });
};
