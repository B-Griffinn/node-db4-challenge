
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step: 1, description: 'Put the ketchup on the bun, not the patty.'},
        {recipe_id: 2, step: 1, description: 'Put the cheese on the patty, not the bun.'},
        {recipe_id: 3, step: 1, description: 'Put the hot dog in the bun, not vice versa.'},
      ]);
    });
};
