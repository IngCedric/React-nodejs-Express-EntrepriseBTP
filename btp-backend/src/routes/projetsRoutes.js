const express = require('express');
const router = express.Router();
const projetsController = require('../controllers/projetsController');

// Route pour récupérer tous les projets
router.get('/', projetsController.getAllProjets);

// Route pour récupérer un projet par son ID
router.get('/:id', projetsController.getProjetById);


module.exports = router;
