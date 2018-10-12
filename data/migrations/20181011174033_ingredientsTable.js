
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl){
    tbl.increments();

    tbl.string('name', 100)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
