// controllers/AccueilController.js
const AccueilController = {
  afficherAccueil: (req, res) => {
    // Code pour récupérer les données à afficher sur la page d'accueil
    const message = "Bienvenue sur notre site de commerce en ligne !";

    // Renvoyer les données à la vue
    res.render('accueil', { message });
  },

  rechercherProduits: (req, res) => {
    // Récupérer le terme de recherche à partir des paramètres de requête
    const searchTerm = req.query.q;

    // Vous pouvez ajouter ici la logique pour effectuer la recherche dans votre base de données
    // et récupérer les produits correspondants

    // Pour l'instant, nous renvoyons simplement le terme de recherche à la vue
    res.render('resultats-recherche', { searchTerm });
  }
};

module.exports = AccueilController;
