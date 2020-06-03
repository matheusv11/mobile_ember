
exports.up = function(knex) {
  return knex.schema.createTable('images', table=>{
      table.increments();

      table.string('size');
      table.string('url').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('images')
};
