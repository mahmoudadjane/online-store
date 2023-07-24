const db = require('../db');

const ProduitsController = {
  getProduits: (req, res) => {
    const query = 'SELECT * FROM produits';

    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('An error occurred');
        return;
      }
      res.render('produits/index', { produits: results });
    });
  },

  getProduitById: (req, res) => {
    const produitId = req.params.id;
    const query = 'SELECT * FROM produits WHERE id = ?';

    db.query(query, [produitId], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('An error occurred');
        return;
      }
      if (results.length === 0) {
        res.status(404).send('Produit not found');
        return;
      }
      res.render('produits/detail', { produit: results[0] });
    });
  }
};

module.exports = ProduitsController;
