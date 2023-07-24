const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categories');
const clientsRoutes = require('./routes/clients');
const commandesRoutes = require('./routes/commandes');
const produitsRoutes = require('./routes/produits');
const accueilRoutes = require('./routes/accueil');

const app = express();
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = require('./db');
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Routes
app.use('/categories', categoryRoutes);
app.use('/clients', clientsRoutes);
app.use('/commandes', commandesRoutes);
app.use('/produits', produitsRoutes);
app.use('Accueil', accueilRoutes);

const port = "4000";
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
