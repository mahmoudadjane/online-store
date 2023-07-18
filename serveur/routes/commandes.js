const express = require('express');
const router = express.Router();
const CommandeController = require('../controllers/CommandeController');

router.get('/', CommandeController.getCommandes);
router.get('/:id', CommandeController.getCommandeById);

module.exports = router;
