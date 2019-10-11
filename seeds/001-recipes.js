
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: 'Burger'},
        {recipe: 'Cheese Burger'},
        {recipe: 'Hot Dog'}
      ]);
    });
};
