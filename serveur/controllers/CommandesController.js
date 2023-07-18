const db = require('../db');

const CommandeController = {
  getCommandes: (req, res) => {
    const query = 'SELECT * FROM commandes';

    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('An error occurred');
        return;
      }
      res.render('commandes/index', { commandes: results });
    });
  },

  getCommandeById: (req, res) => {
    const commandeId = req.params.id;
    const query = 'SELECT * FROM commandes WHERE id = ?';

    db.query(query, [commandeId], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('An error occurred');
        return;
      }
      if (results.length === 0) {
        res.status(404).send('Commande not found');
        return;
      }
      res.render('commandes/detail', { commande: results[0] });
    });
  }
};

module.exports = CommandeController;
