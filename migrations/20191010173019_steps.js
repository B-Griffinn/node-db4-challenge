

exports.up = function(knex) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increments();

        tbl.integer('recipe_id', 25)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('references');

  
        tbl.string('step', 255)
        .notNullable();

        tbl.string('description', 255)
        .notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps')
  };
  
