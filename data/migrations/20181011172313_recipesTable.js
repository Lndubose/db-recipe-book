
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments();

    tbl.string('name', 150);

    tbl.unique('name');

    tbl
      .integer('dishes_id')
      .unsigned()
      .references('id')
      .inTable('dishes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
