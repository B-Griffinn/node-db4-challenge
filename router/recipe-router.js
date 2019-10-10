// Imports
const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

// GET test for our server
router.get('/', (req, res) => {
    db('recipes')
    .select()
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        res.status(500).json({ message: "There was an error retrieving the recipe list."})
    })
})

// EXPORT
module.exports = router;
