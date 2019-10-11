# Notes

## The requirements for the system, as stated by the client are:
- a way to manage **recipes**
- a way to manage **ingredients**

## Constraints
- 1 recipe can have more than one ingredient && the same ingredient can be used in multiple recipes. i.e. ==> "cup of flour" or "gram of butter"
- when *seeding* ingredients to a **recipe** ==> capture the qty required as a floating number (aka a real number that can include decimals)
- save step-by-step instructions for a recipe
    i.e. Step 1 = pour 1 cup of flour into large mixing bowl
    ...  Step 2 = whisk everything in bowl

## Tables Needed
1) Recipes --> holds all recipes **Just Names of recipes**

2) Shopping List --> a list of all ingredients and quantities for a given recipe
    2a) A foreign key will connect a list to a recipe!

3) Instructions --> a list of step by step instructions for preparing a recipe

## Getting Started

### Migration
1) Create Steps table
3) Create Ingredient table
4) Create Recipe table 
Create a recipe out of the steps provided
5) Create Recipe ingredients
- create FK for this table



## Seed Data
- knex seed:make *seed table name*
