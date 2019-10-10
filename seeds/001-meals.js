
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {meal_name: `Helen's Priceless Pumpkin Pancakes`},
        {meal_name: `Hamburger`},
        {meal_name: `Cheeseburger`},
        {meal_name: `Mongoburger`},
      ]);
    });
};
