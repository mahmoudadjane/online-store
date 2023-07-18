const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categories');

const app = express();
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

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
