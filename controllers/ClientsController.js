const db = require('../db');

const ClientController = {
  getClients: (req, res) => {
    const query = 'SELECT * FROM clients';

    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('An error occurred');
        return;
      }
      res.render('clients/index', { clients: results });
    });
  },

  getClientById: (req, res) => {
    const clientId = req.params.id;
    const query = 'SELECT * FROM clients WHERE id = ?';

    db.query(query, [clientId], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('An error occurred');
        return;
      }
     
      res.render('clients/detail', { client: results[0] });
    });
  }
};

module.exports = ClientController;
