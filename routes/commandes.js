const express = require('express');
const router = express.Router();
const CommandesController = require('../controllers/CommandesController');

router.get('/', CommandesController.getCommandes);
router.get('/:id', CommandesController.getCommandeById);

module.exports = router;
