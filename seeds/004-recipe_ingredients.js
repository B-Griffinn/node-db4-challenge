
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, qty: 1, measurements: 'spoonful'},
        {recipe_id: 2, ingredient_id: 2, qty: 0.25, measurements: 'lb'},
        {recipe_id: 3, ingredient_id: 6, qty: 1, measurements: 'link'},
      ]);
    });
};
