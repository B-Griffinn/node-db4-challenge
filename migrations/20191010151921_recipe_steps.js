
exports.up = function(knex) {
  return knex.schema.createTable('recipes_steps', tbl => {
      tbl.increments();

      tbl.string('name')
        .notNullable();

    tbl.integer('recipe_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('recipes');

    tbl.integer('instruction_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('steps');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_steps')
};
