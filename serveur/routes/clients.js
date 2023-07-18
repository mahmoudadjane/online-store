const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.get('/', ClientController.getClients);
router.get('/:id', ClientController.getClientById);

module.exports = router;
