const express = require('express');
const router = express.Router();
const ProduitsController = require('../controllers/ProduitsController');

router.get('/', ProduitsController.getProduits);
router.get('/:id', ProduitsController.getProduitById);

module.exports = router;
