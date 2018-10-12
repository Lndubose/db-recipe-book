
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(tbl){
    tbl.increments();

    tbl.string('name', 100);

    tbl.integer('orderSteps');

    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
