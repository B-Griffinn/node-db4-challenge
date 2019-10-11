// Imports needed - knex, knexConfig, knexConfig.dev
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

/**
getRecipes(): should return a list of all recipes in the database.
getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
 */

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

// getRecipes()
// ``` sql
// select * from recipes
// ```

function getRecipes() {
    return db('recipes')
}

/**
 * getShoppingList()
select name, qty
from recipe_ingredients 
join ingredients on recipe_ingredients.recipe_id = ingredients.id
where recipe_id = 1
 */

 function getShoppingList(id) {
     return db('recipe_ingredients')
     .select('qty', 'name')
     .join('ingredients','recipe_ingredients.recipe_id', 'ingredients.id')
     .where({recipe_id: id})
 }

 /*
select description 
from steps
join recipes on steps.recipe_id = recipes.id
where recipe_id = 1
  */

  function getInstructions(id) {
    return db('steps')
    .join('recipes', 'steps.recipe_id', 'recipes.id')
    .where({ recipe_id: id})
  }
  