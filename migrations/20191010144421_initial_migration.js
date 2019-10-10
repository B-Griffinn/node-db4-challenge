
exports.up = function(knex) {
  return knex.schema.createTable('steps', tbl => {
    tbl.increments();

    tbl.string('step')
        .notNullable();
  })

  .createTable('meals', tbl => {
    tbl.increments();

    tbl.string('meal_name')
        .notNullable();
  })

  .createTable('ingredients', tbl => {
    tbl.increments();

    tbl.string('name')
        .notNullable()
  })

  .createTable('recipes', tbl => {
    tbl.increments();
    // FK???
    tbl.float('quantity')
    .notNullable();

    tbl.text('measurement')
        .notNullable();
    
    tbl.integer('meal_id')
    // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
    // this table must exist already
        .inTable('meals')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('meals')
  .dropTableIfExists('steps')
};
