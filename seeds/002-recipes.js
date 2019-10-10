
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {meal_id: 1, quantity: 1.0, measurement: ''},
        {meal_id:2, quantity: 0.25},
        {meal_id:3, quantity: 0.50},
        {meal_id:4, quantity: 1.0},
      ]);
    });
};
