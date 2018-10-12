
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recToIngred', function(tbl){
    tbl.increments();

    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recpies');

    tbl
      .integer('ingredients_id')
      .unsigned()
      .references('id')
      .inTable('ingredients');

    tbl.string('units', 200);

    tbl.float('quantity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recToIngred');
};