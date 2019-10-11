// Imports
const express = require('express');
const helmet = require('helmet');

// Import router once created
const recipeRouter = require('../router/recipe-router.js');

// Create our server
const server = express();

// Use helmet on our server
server.use(helmet());

// Parse our server requests from the client
server.use(express.json());

// Tell our server to use the router when needed
server.use('/api/recipe', recipeRouter)

// EXPORT
module.exports = server;
