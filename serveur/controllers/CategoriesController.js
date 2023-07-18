const db = require('../db');

const CategoryController = {
  getCategories: (req, res) => {
    const query = 'SELECT * FROM categories';

    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('An error occurred');
        return;
      }
      res.render('categories/index', { categories: results });
    });
  },

  getCategoryById: (req, res) => {
    const categoryId = req.params.id;
    const query = 'SELECT * FROM categories WHERE id = ?';

    db.query(query, [categoryId], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('An error occurred');
        return;
      }
      if (results.length === 0) {
        res.status(404).send('Category not found');
        return;
      }
      res.render('categories/detail', { category: results[0] });
    });
  }
};

module.exports = CategoryController;
