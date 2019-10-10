
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
      tbl.increments();

      tbl.integer('ingredient_id')
        //force integer to be +
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('ingredients')

    tbl.integer('recipe_id')
        //force integer to be +
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('recipes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfexists('recipe_ingredients')
};
