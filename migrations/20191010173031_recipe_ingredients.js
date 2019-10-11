
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
      tbl.increments();

      tbl.integer('ingredient_id', 6)
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients');

      tbl.integer('recipe_id', 6)
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');

      tbl.float('qty', 25)
      .notNullable();

      tbl.string('measurements', 255)
      .notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipe_ingredients')
};
