const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/ClientsController'); // Vérifiez le chemin relatif ici

// Routes pour les clients
router.get('/', clientsController.getClients);
router.get('/:id', clientsController.getClientById);

module.exports = router;
