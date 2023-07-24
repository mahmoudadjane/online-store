const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoriesController');

router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.getCategoryById);

module.exports = router;
