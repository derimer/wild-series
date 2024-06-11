// Load environment variables from .env file
require("dotenv").config();

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
require("./database/client").checkConnection();

// Import the Express application from app/config.js
const app = require("./app/config");

// Get the port from the environment variables
const port = process.env.APP_PORT || 3000;
app.get = (req, res) => {
  res.send("Welcome to Wild Series!");
};

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

/*
const express = require('express');
const dotenv = require('dotenv');
// Charger les variables d'environnement
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Définir la route GET /
app.get('/', (req, res) => {
    res.send('Welcome to Wild Series!');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
*/
