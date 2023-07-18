const express = require('express');
const router = express.Router();
const ProduitController = require('../controllers/ProduitController');

router.get('/', ProduitController.getProduits);
router.get('/:id', ProduitController.getProduitById);

module.exports = router;
