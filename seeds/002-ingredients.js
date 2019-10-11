
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Ketchup'},
        {name: 'Patty'},
        {name: 'Dog Buns'},
        {name: 'Cheese'},
        {name: 'Burger Buns'},
        {name: 'Dog'},
      ]);
    });
};
