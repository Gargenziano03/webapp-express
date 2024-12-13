const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieControllers')

// Definisce la rotta GET per ottenere la lista di tutti i film
router.get('/', MovieController.index);

// Definisce la rotta GET per ottenere un singolo film, dato il suo ID
router.get('/:id', MovieController.show)

module.exports = router