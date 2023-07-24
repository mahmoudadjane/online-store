// routes/accueilRoutes.js
const express = require('express');
const router = express.Router();
const AccueilController = require('../controllers/AccueilController');

// Route pour afficher la page d'accueil
router.get('/Accueil', AccueilController.afficherAccueil);

// Route pour gérer la recherche
router.get('/recherche', AccueilController.rechercherProduits);

module.exports = router;
